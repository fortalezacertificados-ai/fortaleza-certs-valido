import { Link } from "react-router-dom";
import { Shield, Award, QrCode, Phone } from "lucide-react";
import heroImage from "@/assets/hero-certificates.jpg";
import estatuaImage from "@/assets/estatua.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary-dark to-accent text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider flex-1 text-center">
              FORTALEZA CERTIFICADOS
            </h1>
            <img 
              src={estatuaImage} 
              alt="Estátua" 
              className="absolute left-4 h-25 md:h-20 opacity-65 hover:opacity-95 transition-opacity duration-300"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Certificados Profissionais
                  <span className="block text-accent">Com Validação</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Geração rápida e segura de certificados com QR Code e chave única de validação
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/validar" className="btn-hero inline-flex items-center justify-center gap-2">
                  <Shield size={20} />
                  Validar Certificado
                </Link>
                <a 
                  href="https://wa.me/5585999458495" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-validate inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Contato WhatsApp
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Certificados profissionais com QR Code e validação digital"
                className="w-full h-auto rounded-xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia avançada para certificação profissional confiável e reconhecida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="certificate-card p-8 text-center hover-lift">
              <QrCode className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">QR Code Integrado</h4>
              <p className="text-muted-foreground">
                Acesso rápido e prático à validação online do seu certificado
              </p>
            </div>
            
            <div className="certificate-card p-8 text-center hover-lift">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Chave Única</h4>
              <p className="text-muted-foreground">
                Sistema de validação com chave exclusiva para cada certificado
              </p>
            </div>
            
            <div className="certificate-card p-8 text-center hover-lift">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Base Legal</h4>
              <p className="text-muted-foreground">
                Amparado pela LDB Lei nº 9.394/1996 e Decreto nº 5.154/2004
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="certificate-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Sobre Nossos Certificados
            </h3>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Oferecemos geração de certificados profissionais com validação e QR Code de forma rápida e segura. 
                Nossos certificados para cursos livres, seminários e palestras são totalmente amparados pela 
                Lei de Diretrizes e Bases da Educação Nacional (LDB), Lei nº 9.394/1996, e pelo Decreto nº 5.154/2004, 
                que regulamenta a educação profissional e seu funcionamento.
              </p>
              <p>
                Cada certificado possui uma chave única de validação, permitindo a conferência online de sua autenticidade. 
                O QR Code integrado garante praticidade e segurança, tornando seus certificados reconhecidos e confiáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Entre em Contato
          </h3>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Telefone e WhatsApp:
            </p>
            <a 
              href="https://wa.me/5585999458495" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2 text-xl"
            >
              <Phone size={24} />
              (85) 99945-8495
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">FORTALEZA CERTIFICADOS</p>
          <p className="text-primary-foreground/80">
            Certificação profissional confiável e reconhecida
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
