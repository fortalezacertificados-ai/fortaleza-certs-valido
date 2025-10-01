import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Download, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Simulação de base de dados de certificados
const certificateDatabase = {
  "2024001": {
    valid: true,
    name: "João Silva",
    course: "Curso de Marketing Digital",
    date: "15/03/2024",
    downloadUrl: "/certificados/identidade.pdf"
  },
  "2024002": {
    valid: true,
    name: "Maria Santos",
    course: "Seminário de Gestão de Projetos",
    date: "20/03/2024",
    downloadUrl: "#"
  },
  "2024003": {
    valid: true,
    name: "Pedro Costa",
    course: "Palestra de Inovação Tecnológica",
    date: "25/03/2024",
    downloadUrl: "#"
  },
  "IINBVLJOBU": {
    valid: true,
    name: "Gabriel Ribeiro Silva",
    course: "Palestra de Inovação Tecnológica",
    date: "25/03/2024",
    downloadUrl: "/certificados/Certificado_GabrielRibeiroSilva.pdf"
  }
  
};

type ValidationState = 'idle' | 'validating' | 'success' | 'error';

const ValidateCertificate = () => {
  const [certificateKey, setCertificateKey] = useState("");
  const [validationState, setValidationState] = useState<ValidationState>('idle');
  const [certificateData, setCertificateData] = useState<any>(null);

  const handleValidation = () => {
    if (!certificateKey.trim()) return;
    
    setValidationState('validating');
    
    // Simulação de tempo de validação
    setTimeout(() => {
      const certificate = certificateDatabase[certificateKey.toUpperCase() as keyof typeof certificateDatabase];
      
      if (certificate) {
        setCertificateData(certificate);
        setValidationState('success');
      } else {
        setCertificateData(null);
        setValidationState('error');
      }
    }, 1000);
  };

  const handleDownload = () => {
  if (certificateData?.downloadUrl) {
    window.open(
      certificateData.downloadUrl.replace(/^public\//, "/"),
      "_blank"
    );
  }
};


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary-dark to-accent text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">
              Validar Certificado
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="certificate-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Validação de Certificado
              </h2>
              <p className="text-muted-foreground">
                Digite a chave do certificado para verificar sua autenticidade
              </p>
            </div>

            {/* Validation Form */}
            <div className="space-y-6">
              <div>
                <label htmlFor="certificate-key" className="block text-sm font-medium text-foreground mb-2">
                  Chave do Certificado
                </label>
                <Input
                  id="certificate-key"
                  type="text"
                  placeholder="Ex: 2024001"
                  value={certificateKey}
                  onChange={(e) => setCertificateKey(e.target.value.toUpperCase())}
                  className="input-professional text-lg"
                  disabled={validationState === 'validating'}
                />
              </div>

              <Button
                onClick={handleValidation}
                disabled={!certificateKey.trim() || validationState === 'validating'}
                className="btn-validate w-full text-lg py-3"
              >
                {validationState === 'validating' ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground"></div>
                    Validando...
                  </div>
                ) : (
                  <>
                    <Shield size={20} />
                    Validar Certificado
                  </>
                )}
              </Button>
            </div>

            {/* Validation Results */}
            {validationState === 'success' && certificateData && (
              <div className="mt-8 space-y-6">
                <div className="message-success flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span className="text-lg font-semibold">Chave Válida!</span>
                </div>
                
                <div className="certificate-card p-6 bg-success/5 border-success/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Informações do Certificado
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Nome:</strong> {certificateData.name}</p>
                    <p><strong className="text-foreground">Curso:</strong> {certificateData.course}</p>
                    <p><strong className="text-foreground">Data:</strong> {certificateData.date}</p>
                    <p><strong className="text-foreground">Chave:</strong> {certificateKey}</p>
                  </div>
                  
                  <Button
                    onClick={handleDownload}
                    className="btn-hero mt-6 w-full"
                  >
                    <Download size={20} />
                    Baixar Certificado (PDF)
                  </Button>
                </div>
              </div>
            )}

            {validationState === 'error' && (
              <div className="mt-8">
                <div className="message-error flex items-center gap-3">
                  <XCircle size={24} />
                  <span className="text-lg font-semibold">Chave Inválida</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  A chave informada não foi encontrada em nossa base de dados. 
                  Verifique se digitou corretamente ou entre em contato conosco.
                </p>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="mt-12 certificate-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Precisa de Ajuda?
            </h3>
            <p className="text-muted-foreground mb-4">
              A chave do certificado geralmente está localizada no rodapé do documento 
              ou pode ser acessada através do QR Code.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Exemplos de chaves válidas para teste:</strong><br />
              2024001 | 2024002 | 2024003
            </p>
          </div>
        </div>
      </main>

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

export default ValidateCertificate;
