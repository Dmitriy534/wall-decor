import { useState } from 'react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calculator, Home, Palette } from 'lucide-react';

const PriceCalculator = () => {
  const [area, setArea] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  
  // Auto-calculate when inputs change
  const calculatePrice = () => {
    if (!area || !selectedService) {
      setCalculatedPrice(null);
      return;
    }
    
    const service = services.find(s => s.id === selectedService);
    if (service) {
      const total = parseFloat(area) * service.price;
      setCalculatedPrice(total);
    }
  };

  const services = [
    { id: 'painting', name: 'Покраска стен', price: 800, unit: 'м²' },
    { id: 'wallpaper', name: 'Поклейка обоев', price: 600, unit: 'м²' },
    { id: 'plaster', name: 'Декоративная штукатурка', price: 1500, unit: 'м²' },
    { id: 'putty', name: 'Шпаклевка стен', price: 400, unit: 'м²' },
    { id: 'priming', name: 'Грунтовка стен', price: 200, unit: 'м²' },
  ];

  // Effect to auto-calculate when inputs change
  React.useEffect(() => {
    calculatePrice();
  }, [area, selectedService]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Disclaimer */}
      <div className="text-center bg-primary/10 border border-primary/20 rounded-lg p-4 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          <strong className="text-primary">Внимание:</strong> Цены услуг и материалов являются приблизительными 
          и могут отличаться после согласования с мастером и осмотра объекта.
        </p>
      </div>

      <Card className="card-shadow animate-scale-in">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-primary" />
            Калькулятор стоимости
          </CardTitle>
          <p className="text-muted-foreground">
            Рассчитайте примерную стоимость работ
          </p>
        </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            <Home className="inline h-4 w-4 mr-1" />
            Площадь стен (м²)
          </label>
          <Input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Введите площадь в м²"
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">
            <Palette className="inline h-4 w-4 mr-1" />
            Выберите тип работ
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-4 border rounded-lg cursor-pointer smooth-transition ${
                  selectedService === service.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="font-medium">{service.name}</div>
                <div className="text-sm text-muted-foreground">
                  от {formatPrice(service.price)}₽/{service.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Стоимость рассчитывается автоматически при вводе данных
        </div>

        {calculatedPrice && (
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">
                Примерная стоимость работ:
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {formatPrice(calculatedPrice)}₽
              </div>
              <Badge variant="secondary" className="mb-4">
                При площади {area} м²
              </Badge>
              <div className="text-xs text-muted-foreground">
                * Точную стоимость узнайте при выезде замерщика
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
    </div>
  );
};

export default PriceCalculator;