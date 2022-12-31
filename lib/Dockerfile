FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/TechwithAmee1/Dragon-MD-V3 /root/Amiya
WORKDIR /root/Amiya/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
