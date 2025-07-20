import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Как долго сохнет штукатурка?",
      answer: "Время высыхания зависит от типа штукатурки и условий в помещении. Обычно гипсовая штукатурка сохнет 2-7 дней, цементная - 14-28 дней. Декоративная штукатурка может сохнуть от 24 часов до 3 дней."
    },
    {
      question: "Можно ли красить поверх обоев?",
      answer: "Да, но не все обои подходят для покраски. Лучше всего подходят флизелиновые обои под покраску. Виниловые и бумажные обои красить не рекомендуется, так как они могут отклеиться или дать неровный цвет."
    },
    {
      question: "Какая гарантия на выполненные работы?",
      answer: "Мы даем гарантию 2 года на все виды отделочных работ. Гарантия покрывает дефекты, связанные с качеством выполнения работ. На материалы действует гарантия производителя."
    },
    {
      question: "Нужно ли освобождать комнату от мебели?",
      answer: "Необязательно полностью освобождать комнату. Мы аккуратно накрываем и передвигаем мебель. Рекомендуется убрать ценные и хрупкие предметы, а крупную мебель можно оставить."
    },
    {
      question: "Сколько стоит выезд мастера для замера?",
      answer: "Выезд мастера для замера и консультации абсолютно бесплатный в пределах города. При заказе работ стоимость замера не взимается."
    },
    {
      question: "Какие материалы вы используете?",
      answer: "Мы работаем только с проверенными брендами: Dulux, Tikkurila, Caparol, Knauf, Ceresit. Все материалы сертифицированы и безопасны для здоровья. По желанию клиента можем работать с материалами заказчика."
    },
    {
      question: "Можно ли выполнить работы в выходные?",
      answer: "Да, мы работаем 7 дней в неделю. Работы в выходные и праздничные дни возможны по предварительной договоренности. Доплата за работу в выходные составляет 20%."
    },
    {
      question: "Как происходит оплата?",
      answer: "Оплата производится поэтапно: 30% - аванс при подписании договора, 40% - при завершении подготовительных работ, 30% - при полной сдаче объекта. Принимаем наличные и безналичный расчет."
    },
    {
      question: "Убираете ли вы после работ?",
      answer: "Да, уборка входит в стоимость работ. После завершения мы убираем строительный мусор, вытираем пыль с поверхностей и пылесосим помещение. Генеральная уборка не входит в стоимость."
    },
    {
      question: "Можно ли изменить цвет краски после начала работ?",
      answer: "Цвет краски лучше определить до начала работ. Если краска уже куплена, изменение цвета возможно только за дополнительную плату и может увеличить сроки выполнения работ."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="card-shadow">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-3xl font-light">
            <HelpCircle className="h-8 w-8 text-primary" />
            Часто задаваемые <span className="text-gradient">вопросы</span>
          </CardTitle>
          <p className="text-muted-foreground">
            Ответы на популярные вопросы о наших услугах
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;