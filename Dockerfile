FROM node:20-alpine as build

WORKDIR /scr

# Install the application dependencies
COPY package*.json ./

RUN npm install

# Copy in the source code
COPY . . 

# create optimized production build
RUN npm run build 

# Production stage
FROM nginx:alpine

# Copy built files from build stage

COPY --from=build /scr/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

