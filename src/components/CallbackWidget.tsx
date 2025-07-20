import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Phone, X, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CallbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    // Здесь будет интеграция с Supabase
    toast({
      title: "Заявка на звонок отправлена!",
      description: "Мы перезвоним вам в течение 5 минут.",
    });

    setIsSubmitted(true);
    setPhone('');
    setName('');
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Кнопка виджета */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-16 w-16 p-0 shadow-lg hover:shadow-xl smooth-transition group"
          >
            <div className="relative">
              <Phone className="h-6 w-6 group-hover:scale-110 smooth-transition" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </Button>
          
          {/* Подсказка */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <Card className="w-48 card-shadow">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Обратный звонок</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Мы перезвоним за 5 минут!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80">
          <Card className="card-shadow border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Обратный звонок
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Перезвоним за 5 минут</span>
                <Badge variant="destructive" className="text-xs px-2 py-0">
                  Онлайн
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 999-99-99"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full glow-effect">
                    <Phone className="h-4 w-4 mr-2" />
                    Перезвонить мне
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <button className="text-primary hover:underline">
                      политикой конфиденциальности
                    </button>
                  </p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Заявка принята!</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы перезвоним вам в течение 5 минут
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CallbackWidget;