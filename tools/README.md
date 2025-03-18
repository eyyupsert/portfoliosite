# Docker Araçları

Bu klasör, portfolyo uygulamanızı Docker konteynerinde çalıştırmak için gerekli yapılandırma dosyalarını içerir.

## Dosyalar

- **Dockerfile**: Next.js uygulamanızı Docker imajına dönüştürmek için kullanılır.
- **docker-compose.yml**: Uygulamanızı ve gerekli servislerinizi tanımlar ve yönetir.

## Kullanım

Tools klasöründen docker-compose komutlarını çalıştırabilirsiniz:

```bash
cd tools
docker-compose up -d
```

Bu komut, uygulamanızı 3000 portunda çalıştıracaktır. Tarayıcınızdan http://localhost:3000 adresini ziyaret ederek uygulamanıza erişebilirsiniz.

## Docker Yapılandırması Hakkında

- **Multi-stage build**: Daha küçük ve güvenli Docker imajları oluşturmak için çok aşamalı yapı kullanılmıştır.
- **Optimizasyon**: Sadece üretim için gerekli dosyalar final imaja kopyalanır.
- **Güvenlik**: Konteyner root kullanıcı yerine sınırlı haklara sahip nextjs kullanıcısıyla çalışır.
- **Hacimler**: public klasörü container dışında tutularak statik dosyalarda yapılan değişiklikler anında yansıtılır.

## İsteğe Bağlı: Nginx Yapılandırması

Docker Compose dosyasında yorum satırı olarak bulunan Nginx yapılandırmasını açarak uygulamanızı 80/443 portlarında sunabilirsiniz. Bunun için:

1. `./nginx.conf` ve `./ssl` dizinlerini oluşturun
2. `nginx.conf` dosyasına uygun yapılandırmayı ekleyin
3. SSL sertifikalarınızı `./ssl` dizinine yerleştirin
4. docker-compose.yml dosyasında Nginx ile ilgili yorum satırlarını kaldırın
5. `docker-compose up -d` komutunu tekrar çalıştırın 