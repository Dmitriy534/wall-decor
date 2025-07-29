import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна Викторовна",
      location: "ул. Ленина, 10",
      rating: 5,
      date: "15 января 2024",
      service: "Покраска стен",
      text: "Отличная работа! Мастера приехали точно в срок, работали аккуратно, без пыли и грязи. Результат превзошел все ожидания. Стены идеально ровные, краска легла без разводов. Обязательно обратимся еще раз!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Михаил Петрович",
      location: "ЖК 'Солнечный'",
      rating: 5,
      date: "28 декабря 2023",
      service: "Декоративная штукатурка",
      text: "Заказывали венецианскую штукатурку в гостиную. Мастер Александр - настоящий профессионал! Объяснил все нюансы, показал образцы. Работа выполнена на высшем уровне. Друзья в восторге от результата.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Елена Сергеевна",
      location: "ул. Пушкина, 15",
      rating: 5,
      date: "10 декабря 2023",
      service: "Поклейка обоев",
      text: "Очень довольны качеством работы! Обои с крупным рисунком поклеили идеально - все стыки сошлись. Убрали за собой, оставили чистоту. Цена полностью соответствует качеству. Рекомендуем!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Дмитрий Александрович",
      location: "пр. Мира, 25",
      rating: 5,
      date: "22 ноября 2023",
      service: "Комплексная отделка",
      text: "Делали полную отделку трехкомнатной квартиры. Команда работала слаженно, соблюдали все сроки. Качество отличное, гарантию дали на 2 года. Особенно понравилось отношение к мелочам - все детали продуманы.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Ольга Николаевна",
      location: "ул. Гагарина, 8",
      rating: 5,
      date: "18 ноября 2023",
      service: "Покраска стен",
      text: "Перекрашивали детскую комнату. Использовали экологически чистую краску без запаха. Мастера очень аккуратные, защитили всю мебель. Ребенок доволен новым ярким интерьером!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Сергей Викторович",
      location: "ЖК 'Парк Хаус'",
      rating: 5,
      date: "5 ноября 2023",
      service: "Жидкие обои",
      text: "Впервые заказывали жидкие обои. Мастер подробно рассказал о преимуществах, помог выбрать цвет. Покрытие получилось очень красивое и практичное. Царапины легко устраняются. Очень довольны выбором!",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
            Отзывы <span className="text-gradient">клиентов</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам отделку своих домов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="group hover:shadow-glow smooth-transition card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">{review.name}</h3>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <Badge variant="secondary" className="mb-4">
                  {review.service}
                </Badge>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-background rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {renderStars(5)}
                </div>
                <p className="text-sm text-muted-foreground">Средняя оценка</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Рекомендуют нас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;