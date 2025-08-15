import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface ProjectImage {
  id: number;
  url: string;
  alt: string;
}

interface ProjectGroup {
  id: number;
  title: string;
  location: string;
  date: string;
  type: string;
  description: string;
  images: ProjectImage[];
}

const ProjectGallery = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Project groups data
  const projectGroups: ProjectGroup[] = [
    {
      id: 1,
      title: 'Современная квартира в ЖК "Солнечный"',
      location: 'г. Москва, ЖК "Солнечный"',
      date: '15 декабря 2023',
      type: 'Жилая недвижимость',
      description: 'Комплексная отделка 3-комнатной квартиры с применением декоративной штукатурки и дизайнерских решений',
      images: [
        { id: 1, url: '/src/assets/gallery-1.jpg', alt: 'Гостиная с декоративной штукатуркой' },
        { id: 2, url: '/src/assets/gallery-2.jpg', alt: 'Спальня с современной отделкой' },
        { id: 3, url: '/src/assets/gallery-3.jpg', alt: 'Кухня с акцентной стеной' }
      ]
    },
    {
      id: 2,
      title: 'Офисное пространство "Бизнес-центр Альфа"',
      location: 'г. Москва, ул. Тверская',
      date: '28 ноября 2023',
      type: 'Коммерческая недвижимость',
      description: 'Отделка офисных помещений с использованием современных материалов и технологий',
      images: [
        { id: 4, url: '/src/assets/service-painting.jpg', alt: 'Офисный холл' },
        { id: 5, url: '/src/assets/service-plaster.jpg', alt: 'Переговорная комната' },
        { id: 6, url: '/src/assets/service-wallpaper.jpg', alt: 'Рабочая зона' }
      ]
    },
    {
      id: 3,
      title: 'Загородный дом в стиле минимализм',
      location: 'Московская область, пос. Зеленый',
      date: '10 октября 2023',
      type: 'Частный дом',
      description: 'Эксклюзивная отделка загородного дома с акцентом на натуральные материалы',
      images: [
        { id: 7, url: '/src/assets/gallery-1.jpg', alt: 'Главная спальня' },
        { id: 8, url: '/src/assets/gallery-2.jpg', alt: 'Гостиная с камином' },
        { id: 9, url: '/src/assets/gallery-3.jpg', alt: 'Детская комната' }
      ]
    }
  ];

  const currentProject = projectGroups[currentGroup];
  const mainImage = currentProject.images[activeImageIndex];
  const thumbnailImages = currentProject.images.filter((_, index) => index !== activeImageIndex);

  const handleThumbnailClick = (clickedIndex: number) => {
    const actualIndex = currentProject.images.findIndex(img => img.id === currentProject.images.filter((_, index) => index !== activeImageIndex)[clickedIndex].id);
    setActiveImageIndex(actualIndex);
  };

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % projectGroups.length);
    setActiveImageIndex(0);
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + projectGroups.length) % projectGroups.length);
    setActiveImageIndex(0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-light mb-4">
          <span className="text-gradient">Галерея</span> проектов
        </h3>
        <p className="text-muted-foreground">
          Посмотрите на результаты нашей работы
        </p>
      </div>

      <Card className="overflow-hidden card-shadow">
        <CardContent className="p-0">
          {/* Navigation Header */}
          <div className="flex justify-between items-center p-4 border-b border-border">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{currentProject.type}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {currentProject.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {currentProject.date}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevGroup}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentGroup + 1} / {projectGroups.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={nextGroup}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={mainImage.url}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover smooth-transition hover-scale"
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-4">
              {thumbnailImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => handleThumbnailClick(index)}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg hover-scale smooth-transition group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 pt-0">
            <h4 className="text-xl font-medium mb-2">{currentProject.title}</h4>
            <p className="text-muted-foreground">{currentProject.description}</p>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center pb-6">
            <div className="flex gap-2">
              {projectGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentGroup(index);
                    setActiveImageIndex(0);
                  }}
                  className={`w-2 h-2 rounded-full smooth-transition ${
                    index === currentGroup ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectGallery;