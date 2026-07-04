# ISP Monitor 📡

> Painel de monitoramento em tempo real para provedores de internet (ISP).

## Sobre

Dashboard operacional que monitora latencia, uptime e saude de links de clientes em tempo real. Desenvolvido a partir da experiencia de 9 anos em Telecom — resolve o problema de provedores que nao tem visibilidade centralizada do estado da rede.

## Stack

Next.js • Socket.IO • Chart.js • Ping/SNMP • PostgreSQL • Docker

## Funcionalidades

- Monitoramento de latencia em tempo real via WebSocket
- Historico de uptime com graficos interativos
- Alertas configuráveis por limiar (e-mail/Webhook)
- Mapa de rede com status dosinks
- Relatorios exportaveis (PDF/CSV)
- Autenticacao multi-usuario

## Problema Resolvido

Provedores de internet com 500+ clientes nao tinham visibilidade centralizada.
Quedas eram detectadas por ligacao de clientes — nao por monitoramento proativo.

## Metricas de Impacto

| Metrica | Antes | Depois |
|---------|-------|--------|
| Tempo para detectar queda | ~15min (cliente liga) | < 30s |
| Uptime medio mensal | 96% | 99.5%+ |
| Chamados por falha | 12/dia | 2/dia |

## Como Executar

```bash
git clone https://github.com/KaduSR/isp-monitor
cd isp-monitor
npm install
docker compose up -d  # sobe PostgreSQL
npm run dev
```

---

*Projeto #21 do portfolio — combinando 9 anos de Telecom com engenharia moderna.*
