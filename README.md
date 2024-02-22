# Ethereum İşlem Görüntüleyici

Bu proje, kullanıcının girdiği Ethereum cüzdan adresi için blockchain üzerinden işlem verilerini sorgular ve sonuçları bir web arayüzünde gösterir.

## Kurulum

Bu projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları takip edin:

1. Repoyu klonlayın
```bash
git clone https://github.com/yourusername/eth-transaction-viewer.git
cd eth-transaction-viewer
```

2. Gerekli NPM paketlerini yükleyin
```bash
npm install
```

3. .env dosyasını oluşturun ve Infura API anahtarınızı ekleyin:
```bash
INFURA_ENDPOINT=https://mainnet.infura.io/v3/your_project_id
```

4. Uygulamayı çalıştırın
```bash
node index.js
```

Kullanım
Uygulamayı çalıştırdıktan sonra, tarayıcınızda http://localhost:3000 adresine gidin ve Ethereum cüzdan adresinizi girin.

Katkıda Bulunma
Projeye katkıda bulunmak istiyorsanız, lütfen öncelikle tartışılacak konuyu bir issue olarak açın.

Lisans
Bu proje MIT lisansı altında lisanslanmıştır - daha fazla detay için LICENSE dosyasına bakın.
