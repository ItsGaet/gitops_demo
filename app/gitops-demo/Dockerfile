# Usa un'immagine base per Node.js
FROM node:18-alpine AS builder

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file necessari
COPY package.json package-lock.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dei file dell'app
COPY . .

# Costruisce l'app per la produzione
RUN npm run build

# Usa un'immagine più leggera per servire il contenuto
FROM node:18-alpine AS runner

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file necessari dalla fase di build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Espone la porta per l'app
EXPOSE 3000

# Comando di default per avviare l'app
CMD ["npm", "run", "start"]
