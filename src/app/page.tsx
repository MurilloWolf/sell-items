"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { produtos } from "@/data/produtos";

function criarMensagemWhatsApp(nomeProduto: string) {
  const mensagem = `Boa tarde, estou interessado em ${nomeProduto}`;
  const numeroWhatsApp = "5518997708504"; // Substitua pelo seu número
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

export default function ProdutosCasa() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Produtos de Casa à Venda
          </h1>
          <p className="text-center mt-2 text-primary-foreground/80">
            Móveis e eletrodomésticos em ótimo estado - Preços imperdíveis!
          </p>
        </div>
      </header>

      {/* Grid de Produtos */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={produto.imagem || "/placeholder.svg"}
                  alt={produto.nome}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{produto.nome}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {produto.tempoUso}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {produto.descricao}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {produto.preco}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() =>
                    window.open(criarMensagemWhatsApp(produto.nome), "_blank")
                  }
                >
                  💬 Comprar via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Entre em contato pelo WhatsApp para mais informações ou para agendar
            uma visita
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Todos os produtos são vendidos no estado atual - Fotos reais
            disponíveis via WhatsApp
          </p>
        </div>
      </footer>
    </div>
  );
}
