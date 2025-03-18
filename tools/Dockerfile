FROM node:18-alpine AS base

# Çalışma dizini oluştur
WORKDIR /app

# ESLint kontrollerini devre dışı bırak
ENV NEXT_DISABLE_ESLINT=1

# Bağımlılıkları kopyala ve yükle
COPY package.json package-lock.json* ./
RUN npm ci

# Kaynak kodlarını kopyala
COPY . .

# Next.js uygulamasını build et
RUN npm run build

# Üretim ortamı için yeni bir aşama
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Kullanıcı ekleme (güvenlik için)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Sadece üretim için gerekli dosyaları kopyala
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# Kullanıcı değiştir
USER nextjs

# Port belirle
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Uygulamayı başlat
CMD ["node", "server.js"] 