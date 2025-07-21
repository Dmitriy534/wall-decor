import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Dulux",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Премиальные краски и покрытия"
    },
    {
      id: 2,
      name: "Tikkurila",
      logo: "https://images.unsplash.com/photo-1572041002223-3d898f4cca66?w=200&h=100&fit=crop",
      description: "Финские краски высокого качества"
    },
    {
      id: 3,
      name: "Benjamin Moore",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop",
      description: "Американские дизайнерские краски"
    },
    {
      id: 4,
      name: "Rasch",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=100&fit=crop",
      description: "Немецкие обои премиум-класса"
    },
    {
      id: 5,
      name: "AS Création",
      logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=100&fit=crop",
      description: "Дизайнерские коллекции обоев"
    },
    {
      id: 6,
      name: "San Marco",
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=100&fit=crop",
      description: "Итальянские декоративные штукатурки"
    }
  ];

  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Наши <span className="text-gradient">партнеры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Работаем только с проверенными брендами и качественными материалами
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <Card key={partner.id} className="group hover:shadow-glow smooth-transition card-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-16 object-cover group-hover:scale-105 smooth-transition grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="font-medium mb-2 text-sm">{partner.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-dark-surface rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium mb-4">Качество гарантировано</h3>
            <p className="text-muted-foreground">
              Все материалы поставляются напрямую от официальных дилеров. 
              Предоставляем сертификаты качества на всю продукцию. 
              Гарантия на материалы согласно заводским стандартам.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;