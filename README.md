# Eyyüp SERT - Kişisel Portfolio Sitesi

Bu proje, Eyyüp SERT'in Java (Spring Boot), C# (.NET Core), MySQL, MongoDB, RabbitMQ ve Docker gibi teknolojilerdeki uzmanlığını sergilemek amacıyla oluşturulmuş modern bir kişisel portfolio sitesidir.

## Kullanılan Teknolojiler

- **Next.js** - React tabanlı web uygulaması çerçevesi
- **Tailwind CSS** - Hızlı UI geliştirme için kullanılan utility-first CSS framework'ü
- **Framer Motion** - Reaktif ve etkileyici animasyonlar için kütüphane
- **TypeScript** - Tip güvenliği sağlayan JavaScript süper kümesi

## Özellikler

- Tam duyarlı tasarım (responsive design)
- Animasyonlu bileşenler ve geçişler
- Karanlık/Aydınlık tema desteği
- SEO dostu yapı
- Performans odaklı geliştirme
- Kolay özelleştirilebilirlik

## Nasıl Çalıştırılır

1. Depoyu (repository) klonlayın:
```bash
git clone https://github.com/yourusername/portfoliosite.git
cd portfoliosite
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyin.

## Yapı

```
├── public/             # Statik dosyalar (görseller, fontlar, vb.)
├── src/
│   ├── app/            # Next.js 13 App Router
│   ├── components/     # React bileşenleri
│   └── styles/         # Global stil dosyaları
├── tailwind.config.js  # Tailwind CSS yapılandırması
└── package.json        # Proje bağımlılıkları ve scripts
```

## Özelleştirme

Site içeriğini özelleştirmek için aşağıdaki dosyalarda değişiklik yapabilirsiniz:

- `src/components/` altındaki ilgili bileşenler
- Profil resmini değiştirmek için `public/profile.jpg` dosyasını güncelleyin
- Proje görsellerini değiştirmek için `public/project1.jpg` vb. dosyaları güncelleyin

## Dağıtım (Deployment)

Site, Vercel, Netlify veya herhangi bir static hosting sağlayıcısına kolayca dağıtılabilir.

```bash
npm run build
```

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

Eyyüp SERT tarafından ❤️ ile yapılmıştır.
