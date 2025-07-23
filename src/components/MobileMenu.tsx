import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#prices', label: 'Цены' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' }
  ];

  const handleLinkClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCallMaster = () => {
    setOpen(false);
    const widget = document.querySelector('[data-callback-widget]');
    if (widget) {
      (widget as HTMLElement).click();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4">
            <span className="text-lg font-semibold">Меню</span>
          </div>
          
          <nav className="flex flex-col space-y-4 mt-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="text-left text-lg py-3 px-4 rounded-lg hover:bg-secondary smooth-transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pb-6">
            <Button 
              onClick={handleCallMaster}
              className="w-full"
              size="lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;