import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({ username: '', role: '' });
  const [activeSection, setActiveSection] = useState('home');

  const handleLogin = () => {
    if (username === 'TOURIST_WAGNERA' && password === 'wagnera_tut$45$') {
      setIsLoggedIn(true);
      setCurrentUser({ username: 'TOURIST_WAGNERA', role: 'owner' });
      toast({
        title: 'Вход выполнен',
        description: 'Добро пожаловать на сервер Russian Town!',
      });
    } else {
      toast({
        title: 'Ошибка входа',
        description: 'Неверный логин или пароль',
        variant: 'destructive',
      });
    }
  };

  const factions = {
    open: [
      { name: 'МВД', icon: 'Shield', color: 'bg-blue-500' },
      { name: 'СОБР', icon: 'ShieldAlert', color: 'bg-blue-700' },
      { name: 'ДПС', icon: 'Car', color: 'bg-cyan-500' },
      { name: 'Росгвардия', icon: 'ShieldCheck', color: 'bg-indigo-600' },
      { name: 'ЦОДД', icon: 'Radio', color: 'bg-purple-500' },
      { name: 'Армия', icon: 'Swords', color: 'bg-green-600' },
    ],
    closed: [
      { name: 'ССО', icon: 'Target', color: 'bg-red-600' },
      { name: 'СБП', icon: 'Lock', color: 'bg-orange-600' },
      { name: 'ФСБ', icon: 'Eye', color: 'bg-gray-700' },
      { name: 'ФСО', icon: 'ShieldBan', color: 'bg-gray-800' },
    ],
    criminal: [
      { name: 'ОПГ Темного', icon: 'Skull', color: 'bg-gray-900' },
      { name: 'ОПГ Красное', icon: 'Flame', color: 'bg-red-700' },
      { name: 'Тамбовское ОПГ', icon: 'Users', color: 'bg-yellow-700' },
    ],
  };

  const generals = [
    { name: 'Турист-вагнера', faction: 'ЦОДД', role: 'Генерал' },
    { name: 'Cailon86', faction: 'Полиция', role: 'Генерал' },
    { name: 'Pancake', faction: 'Армия', role: 'Генерал' },
  ];

  const admins = [
    { name: 'Pancake', rank: 'Старший администратор', badge: 'bg-red-600' },
    { name: 'Cj', rank: 'Младший администратор', badge: 'bg-yellow-600' },
    { name: 'gotnevl', rank: 'Администратор', badge: 'bg-orange-600' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 p-4">
        <Card className="w-full max-w-md border-primary/20 shadow-2xl animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Icon name="Gamepad2" size={48} className="text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Russian Town</CardTitle>
            <CardDescription className="text-lg">Brick Rigs Gaming Server</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Никнейм</Label>
                  <Input
                    id="username"
                    placeholder="TOURIST_WAGNERA"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button onClick={handleLogin} className="w-full">
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </Button>
              </TabsContent>
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-username">Никнейм</Label>
                  <Input id="reg-username" placeholder="Введите никнейм" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email</Label>
                  <Input id="reg-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Пароль</Label>
                  <Input id="reg-password" type="password" />
                </div>
                <Button className="w-full">
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">Russian Town</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                <Icon name="User" size={14} className="mr-1" />
                {currentUser.username}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsLoggedIn(false);
                  setUsername('');
                  setPassword('');
                }}
              >
                <Icon name="LogOut" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4 space-y-2">
                {[
                  { id: 'home', label: 'Главная', icon: 'Home' },
                  { id: 'rules', label: 'Правила', icon: 'FileText' },
                  { id: 'discord', label: 'Discord', icon: 'MessageCircle' },
                  { id: 'factions', label: 'Фракции', icon: 'Users' },
                  { id: 'support', label: 'Поддержка', icon: 'HelpCircle' },
                  { id: 'gallery', label: 'Галерея', icon: 'Image' },
                  { id: 'forum', label: 'Форум', icon: 'MessageSquare' },
                  { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
                  { id: 'admins', label: 'Администрация', icon: 'Shield' },
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(item.id)}
                  >
                    <Icon name={item.icon} size={18} className="mr-2" />
                    {item.label}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            {activeSection === 'home' && (
              <div className="space-y-6 animate-fade-in">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-3xl">Добро пожаловать на Russian Town</CardTitle>
                    <CardDescription className="text-lg">
                      Официальный сервер Brick Rigs с реалистичной ролевой игрой
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg text-center">
                        <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm text-muted-foreground">Игроков</div>
                      </div>
                      <div className="p-4 bg-secondary/10 rounded-lg text-center">
                        <Icon name="Shield" size={32} className="mx-auto mb-2 text-secondary" />
                        <div className="text-2xl font-bold">13</div>
                        <div className="text-sm text-muted-foreground">Фракций</div>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg text-center">
                        <Icon name="Star" size={32} className="mx-auto mb-2 text-accent" />
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-muted-foreground">Онлайн</div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">О сервере</h3>
                      <p className="text-muted-foreground">
                        Russian Town — это уникальный сервер Brick Rigs с глубокой ролевой системой.
                        Выбирайте фракцию, развивайтесь, участвуйте в операциях и станьте частью нашего сообщества!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Генералы фракций</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {generals.map((general) => (
                        <div key={general.name} className="p-4 bg-muted rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/20 rounded-full">
                              <Icon name="Crown" size={24} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{general.name}</div>
                              <div className="text-sm text-muted-foreground">{general.faction}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'rules' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={24} className="mr-2" />
                    Правила сервера
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Уважайте других игроков и администрацию',
                    'Запрещено использование читов и эксплойтов',
                    'Соблюдайте ролевую составляющую игры',
                    'Не занимайтесь гриферством и вредительством',
                    'Следуйте указаниям администрации',
                    'Запрещена реклама других серверов',
                    'Используйте адекватные никнеймы',
                    'Не спамьте в чате',
                  ].map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Badge variant="outline" className="mt-0.5">{index + 1}</Badge>
                      <p>{rule}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeSection === 'discord' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageCircle" size={24} className="mr-2" />
                    Сервер Discord
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Присоединяйтесь к нашему Discord серверу для общения с игроками и получения последних новостей!
                  </p>
                  <div className="p-6 bg-primary/10 rounded-lg text-center space-y-4">
                    <Icon name="MessageCircle" size={64} className="mx-auto text-primary" />
                    <Button size="lg" asChild>
                      <a href="https://discord.gg/RuBxnxyEV5" target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        Присоединиться к Discord
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'factions' && (
              <div className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="ShieldCheck" size={24} className="mr-2" />
                      Открытые фракции
                    </CardTitle>
                    <CardDescription>Доступны для всех игроков</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {factions.open.map((faction) => (
                        <div
                          key={faction.name}
                          className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                        >
                          <div className={`w-12 h-12 ${faction.color} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon name={faction.icon} size={24} className="text-white" />
                          </div>
                          <div className="font-semibold">{faction.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Lock" size={24} className="mr-2" />
                      Закрытые фракции
                    </CardTitle>
                    <CardDescription>Требуется специальное разрешение</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {factions.closed.map((faction) => (
                        <div
                          key={faction.name}
                          className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                        >
                          <div className={`w-12 h-12 ${faction.color} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon name={faction.icon} size={24} className="text-white" />
                          </div>
                          <div className="font-semibold">{faction.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Skull" size={24} className="mr-2" />
                      Криминальные структуры
                    </CardTitle>
                    <CardDescription>Опасные организации</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {factions.criminal.map((faction) => (
                        <div
                          key={faction.name}
                          className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                        >
                          <div className={`w-12 h-12 ${faction.color} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon name={faction.icon} size={24} className="text-white" />
                          </div>
                          <div className="font-semibold">{faction.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'support' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="HelpCircle" size={24} className="mr-2" />
                    Поддержка
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Нужна помощь? Свяжитесь с нами через форму ниже или напишите в Discord.
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Тема обращения</Label>
                      <Input placeholder="Опишите вашу проблему" />
                    </div>
                    <div className="space-y-2">
                      <Label>Сообщение</Label>
                      <textarea
                        className="w-full min-h-[120px] px-3 py-2 bg-background border border-input rounded-md"
                        placeholder="Подробно опишите вашу ситуацию..."
                      />
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить обращение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'gallery' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Image" size={24} className="mr-2" />
                    Галерея
                  </CardTitle>
                  <CardDescription>Скриншоты игроков</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Icon name="Upload" size={18} className="mr-2" />
                    Загрузить скриншот
                  </Button>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-video bg-muted rounded-lg flex items-center justify-center hover:bg-muted/70 transition-colors cursor-pointer"
                      >
                        <Icon name="Image" size={32} className="text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'forum' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageSquare" size={24} className="mr-2" />
                    Форум
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Создать пост
                  </Button>
                  <div className="space-y-3">
                    {[
                      { title: 'Обновление сервера', author: 'Pancake', replies: 15 },
                      { title: 'Набор в фракцию ЦОДД', author: 'Турист-вагнера', replies: 8 },
                      { title: 'Вопрос по правилам', author: 'Cailon86', replies: 3 },
                    ].map((post, i) => (
                      <div key={i} className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                        <h3 className="font-semibold mb-2">{post.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Автор: {post.author}</span>
                          <span className="flex items-center">
                            <Icon name="MessageCircle" size={14} className="mr-1" />
                            {post.replies}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'stats' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart3" size={24} className="mr-2" />
                    Статистика сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Информация о Discord</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Участников</span>
                          <span className="font-semibold">523</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Онлайн</span>
                          <span className="font-semibold text-green-500">142</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Каналов</span>
                          <span className="font-semibold">28</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Игровая статистика</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Онлайн игроков</span>
                          <span className="font-semibold text-green-500">47</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Активных фракций</span>
                          <span className="font-semibold">13</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span>Проведено операций</span>
                          <span className="font-semibold">1,247</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === 'admins' && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={24} className="mr-2" />
                    Администрация сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {admins.map((admin) => (
                      <div key={admin.name} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${admin.badge} rounded-full flex items-center justify-center`}>
                            <Icon name="Shield" size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">{admin.name}</div>
                            <div className="text-sm text-muted-foreground">{admin.rank}</div>
                          </div>
                        </div>
                        <Badge className={admin.badge}>{admin.rank}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
