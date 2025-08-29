import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById('main-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById('main-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = document.getElementById('main-video') as HTMLVideoElement;
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">
            <span className="text-gradient">Видео</span> о нашей работе
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Посмотрите, как мы создаем пространства мечты наших клиентов
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden card-shadow hover-scale smooth-transition">
            <CardContent className="p-0">
              <div 
                className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                {/* Placeholder video - replace with actual video */}
                <video
                  id="main-video"
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=675&fit=crop"
                  muted={isMuted}
                  loop
                  preload="metadata"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 smooth-transition" />

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm rounded-full w-20 h-20"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                )}

                {/* Video Controls */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 smooth-transition ${
                  showControls && isPlaying ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleMuteToggle}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleFullscreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-white text-sm font-medium">
                      Процесс отделки квартиры
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Завершенных проектов</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Лет опыта</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;