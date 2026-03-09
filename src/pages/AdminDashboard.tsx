
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tables } from "@/integrations/supabase/types";
import {
  LogOut, Plus, Pencil, Trash2, Shield, DollarSign, BookOpen, Wrench, Save, Loader2,
} from "lucide-react";

type Service = Tables<"services">;
type PricingPlan = Tables<"pricing_plans">;
type Course = Tables<"courses">;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin/login"); return; }
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" });
      if (!isAdmin) { navigate("/admin/login"); return; }
      fetchAll();
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate("/admin/login");
    });

    check();
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchAll = async () => {
    setLoading(true);
    const [s, p, c] = await Promise.all([
      supabase.from("services").select("*").order("sort_order"),
      supabase.from("pricing_plans").select("*").order("sort_order"),
      supabase.from("courses").select("*").order("sort_order"),
    ]);
    if (s.data) setServices(s.data);
    if (p.data) setPlans(p.data);
    if (c.data) setCourses(c.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30" dir="rtl">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">لوحة تحكم المدير</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 ml-2" /> تسجيل الخروج
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
            <TabsTrigger value="services" className="gap-2"><Wrench className="w-4 h-4" /> الخدمات</TabsTrigger>
            <TabsTrigger value="pricing" className="gap-2"><DollarSign className="w-4 h-4" /> الأسعار</TabsTrigger>
            <TabsTrigger value="courses" className="gap-2"><BookOpen className="w-4 h-4" /> الكورسات</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <ServicesTab services={services} onRefresh={fetchAll} />
          </TabsContent>
          <TabsContent value="pricing">
            <PricingTab plans={plans} onRefresh={fetchAll} />
          </TabsContent>
          <TabsContent value="courses">
            <CoursesTab courses={courses} onRefresh={fetchAll} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

/* ===== Services Tab ===== */
const ServicesTab = ({ services, onRefresh }: { services: Service[]; onRefresh: () => void }) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ title_en: "", title_ar: "", description_en: "", description_ar: "", icon: "Badge", sort_order: 0 });
  const [saving, setSaving] = useState(false);

  const openNew = () => { setEditing(null); setForm({ title_en: "", title_ar: "", description_en: "", description_ar: "", icon: "Badge", sort_order: 0 }); setOpen(true); };
  const openEdit = (s: Service) => { setEditing(s); setForm({ title_en: s.title_en, title_ar: s.title_ar, description_en: s.description_en, description_ar: s.description_ar, icon: s.icon, sort_order: s.sort_order }); setOpen(true); };

  const handleSave = async () => {
    if (!form.title_en.trim() || !form.title_ar.trim()) { toast({ title: "خطأ", description: "يرجى ملء جميع الحقول المطلوبة", variant: "destructive" }); return; }
    setSaving(true);
    try {
      if (editing) {
        const { error } = await supabase.from("services").update(form).eq("id", editing.id);
        if (error) throw error;
        toast({ title: "تم التحديث بنجاح" });
      } else {
        const { error } = await supabase.from("services").insert(form);
        if (error) throw error;
        toast({ title: "تمت الإضافة بنجاح" });
      }
      setOpen(false);
      onRefresh();
    } catch (e: any) { toast({ title: "خطأ", description: e.message, variant: "destructive" }); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) toast({ title: "خطأ", description: error.message, variant: "destructive" });
    else { toast({ title: "تم الحذف" }); onRefresh(); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">إدارة الخدمات</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}><Plus className="w-4 h-4 ml-2" /> إضافة خدمة</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" dir="rtl">
            <DialogHeader><DialogTitle>{editing ? "تعديل الخدمة" : "إضافة خدمة جديدة"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>العنوان (عربي)</Label><Input value={form.title_ar} onChange={e => setForm(f => ({ ...f, title_ar: e.target.value }))} /></div>
                <div><Label>Title (EN)</Label><Input value={form.title_en} onChange={e => setForm(f => ({ ...f, title_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>الوصف (عربي)</Label><Textarea value={form.description_ar} onChange={e => setForm(f => ({ ...f, description_ar: e.target.value }))} /></div>
                <div><Label>Description (EN)</Label><Textarea value={form.description_en} onChange={e => setForm(f => ({ ...f, description_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>الأيقونة</Label><Input value={form.icon} onChange={e => setForm(f => ({ ...f, icon: e.target.value }))} dir="ltr" /></div>
                <div><Label>الترتيب</Label><Input type="number" value={form.sort_order} onChange={e => setForm(f => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} /></div>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">
                {saving ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Save className="w-4 h-4 ml-2" />}
                {editing ? "حفظ التعديلات" : "إضافة"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {services.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground bg-card rounded-xl border border-border">
          <Wrench className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>لا توجد خدمات حتى الآن</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {services.map(s => (
            <div key={s.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{s.title_ar}</h3>
                <p className="text-sm text-muted-foreground">{s.title_en}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => openEdit(s)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id)} className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ===== Pricing Tab ===== */
const PricingTab = ({ plans, onRefresh }: { plans: PricingPlan[]; onRefresh: () => void }) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<PricingPlan | null>(null);
  const [form, setForm] = useState({
    name_en: "", name_ar: "", description_en: "", description_ar: "",
    price_usd: "", price_local: "", price_annual_usd: "", price_annual_local: "",
    is_highlighted: false, sort_order: 0,
  });
  const [saving, setSaving] = useState(false);

  const openNew = () => {
    setEditing(null);
    setForm({ name_en: "", name_ar: "", description_en: "", description_ar: "", price_usd: "", price_local: "", price_annual_usd: "", price_annual_local: "", is_highlighted: false, sort_order: 0 });
    setOpen(true);
  };
  const openEdit = (p: PricingPlan) => {
    setEditing(p);
    setForm({ name_en: p.name_en, name_ar: p.name_ar, description_en: p.description_en, description_ar: p.description_ar, price_usd: p.price_usd, price_local: p.price_local, price_annual_usd: p.price_annual_usd || "", price_annual_local: p.price_annual_local || "", is_highlighted: p.is_highlighted, sort_order: p.sort_order });
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.name_en.trim() || !form.name_ar.trim() || !form.price_usd.trim()) { toast({ title: "خطأ", description: "يرجى ملء الحقول المطلوبة", variant: "destructive" }); return; }
    setSaving(true);
    try {
      const payload = { ...form, price_annual_usd: form.price_annual_usd || null, price_annual_local: form.price_annual_local || null };
      if (editing) {
        const { error } = await supabase.from("pricing_plans").update(payload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("pricing_plans").insert(payload);
        if (error) throw error;
      }
      toast({ title: editing ? "تم التحديث" : "تمت الإضافة" });
      setOpen(false); onRefresh();
    } catch (e: any) { toast({ title: "خطأ", description: e.message, variant: "destructive" }); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const { error } = await supabase.from("pricing_plans").delete().eq("id", id);
    if (error) toast({ title: "خطأ", description: error.message, variant: "destructive" });
    else { toast({ title: "تم الحذف" }); onRefresh(); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">إدارة الأسعار</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}><Plus className="w-4 h-4 ml-2" /> إضافة خطة</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" dir="rtl">
            <DialogHeader><DialogTitle>{editing ? "تعديل الخطة" : "إضافة خطة جديدة"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>الاسم (عربي)</Label><Input value={form.name_ar} onChange={e => setForm(f => ({ ...f, name_ar: e.target.value }))} /></div>
                <div><Label>Name (EN)</Label><Input value={form.name_en} onChange={e => setForm(f => ({ ...f, name_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>الوصف (عربي)</Label><Textarea value={form.description_ar} onChange={e => setForm(f => ({ ...f, description_ar: e.target.value }))} /></div>
                <div><Label>Description (EN)</Label><Textarea value={form.description_en} onChange={e => setForm(f => ({ ...f, description_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>السعر (USD)</Label><Input value={form.price_usd} onChange={e => setForm(f => ({ ...f, price_usd: e.target.value }))} dir="ltr" /></div>
                <div><Label>السعر (محلي)</Label><Input value={form.price_local} onChange={e => setForm(f => ({ ...f, price_local: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>السعر السنوي (USD)</Label><Input value={form.price_annual_usd} onChange={e => setForm(f => ({ ...f, price_annual_usd: e.target.value }))} dir="ltr" /></div>
                <div><Label>السعر السنوي (محلي)</Label><Input value={form.price_annual_local} onChange={e => setForm(f => ({ ...f, price_annual_local: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={form.is_highlighted} onCheckedChange={v => setForm(f => ({ ...f, is_highlighted: v }))} />
                <Label>مميز (الأكثر شيوعاً)</Label>
              </div>
              <div><Label>الترتيب</Label><Input type="number" value={form.sort_order} onChange={e => setForm(f => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} /></div>
              <Button onClick={handleSave} disabled={saving} className="w-full">
                {saving ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Save className="w-4 h-4 ml-2" />}
                {editing ? "حفظ التعديلات" : "إضافة"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {plans.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground bg-card rounded-xl border border-border">
          <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>لا توجد خطط أسعار حتى الآن</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {plans.map(p => (
            <div key={p.id} className={`bg-card border rounded-xl p-4 flex items-center justify-between ${p.is_highlighted ? "border-primary" : "border-border"}`}>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{p.name_ar}</h3>
                  {p.is_highlighted && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">مميز</span>}
                </div>
                <p className="text-sm text-muted-foreground">{p.price_usd} — {p.price_local}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => openEdit(p)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)} className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ===== Courses Tab ===== */
const CoursesTab = ({ courses, onRefresh }: { courses: Course[]; onRefresh: () => void }) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);
  const [form, setForm] = useState({
    title_en: "", title_ar: "", description_en: "", description_ar: "", price: "", sort_order: 0,
  });
  const [saving, setSaving] = useState(false);

  const openNew = () => { setEditing(null); setForm({ title_en: "", title_ar: "", description_en: "", description_ar: "", price: "", sort_order: 0 }); setOpen(true); };
  const openEdit = (c: Course) => { setEditing(c); setForm({ title_en: c.title_en, title_ar: c.title_ar, description_en: c.description_en, description_ar: c.description_ar, price: c.price, sort_order: c.sort_order }); setOpen(true); };

  const handleSave = async () => {
    if (!form.title_en.trim() || !form.title_ar.trim()) { toast({ title: "خطأ", description: "يرجى ملء الحقول المطلوبة", variant: "destructive" }); return; }
    setSaving(true);
    try {
      if (editing) {
        const { error } = await supabase.from("courses").update(form).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("courses").insert(form);
        if (error) throw error;
      }
      toast({ title: editing ? "تم التحديث" : "تمت الإضافة" });
      setOpen(false); onRefresh();
    } catch (e: any) { toast({ title: "خطأ", description: e.message, variant: "destructive" }); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    const { error } = await supabase.from("courses").delete().eq("id", id);
    if (error) toast({ title: "خطأ", description: error.message, variant: "destructive" });
    else { toast({ title: "تم الحذف" }); onRefresh(); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">إدارة الكورسات</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}><Plus className="w-4 h-4 ml-2" /> إضافة كورس</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" dir="rtl">
            <DialogHeader><DialogTitle>{editing ? "تعديل الكورس" : "إضافة كورس جديد"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>العنوان (عربي)</Label><Input value={form.title_ar} onChange={e => setForm(f => ({ ...f, title_ar: e.target.value }))} /></div>
                <div><Label>Title (EN)</Label><Input value={form.title_en} onChange={e => setForm(f => ({ ...f, title_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>الوصف (عربي)</Label><Textarea value={form.description_ar} onChange={e => setForm(f => ({ ...f, description_ar: e.target.value }))} /></div>
                <div><Label>Description (EN)</Label><Textarea value={form.description_en} onChange={e => setForm(f => ({ ...f, description_en: e.target.value }))} dir="ltr" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>السعر</Label><Input value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} dir="ltr" /></div>
                <div><Label>الترتيب</Label><Input type="number" value={form.sort_order} onChange={e => setForm(f => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} /></div>
              </div>
              <Button onClick={handleSave} disabled={saving} className="w-full">
                {saving ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Save className="w-4 h-4 ml-2" />}
                {editing ? "حفظ التعديلات" : "إضافة"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground bg-card rounded-xl border border-border">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>لا توجد كورسات حتى الآن</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {courses.map(c => (
            <div key={c.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{c.title_ar}</h3>
                <p className="text-sm text-muted-foreground">{c.price}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => openEdit(c)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(c.id)} className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
