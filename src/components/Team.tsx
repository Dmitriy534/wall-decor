import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Award, Clock } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Александр Петров",
      role: "Ведущий мастер",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "15 лет",
      specialization: "Декоративная штукатурка",
      description: "Опытный специалист с 15-летним стажем. Мастер венецианской штукатурки и сложных фактурных покрытий. Выполнил более 200 проектов."
    },
    {
      id: 2,
      name: "Михаил Иванов",
      role: "Мастер-маляр",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "10 лет",
      specialization: "Покраска стен",
      description: "Специалист по покраске стен и потолков. Работает с премиальными красками. Гарантирует идеально ровное покрытие без разводов."
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      role: "Мастер по обоям",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      experience: "12 лет",
      specialization: "Поклейка обоев",
      description: "Эксперт по поклейке всех видов обоев. Специализируется на сложных стыках и рисунках. Работает с дизайнерскими коллекциями."
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Наша <span className="text-gradient">команда</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные мастера с многолетним опытом работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-glow smooth-transition card-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge variant="secondary" className="mb-2">
                      {member.role}
                    </Badge>
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.specialization}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-primary" />
                      {member.experience}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1 text-primary" />
                      Сертифицирован
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-primary">
                      <Wrench className="h-4 w-4 mr-2" />
                      <span className="font-medium">{member.specialization}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;