# Projeto Primme Seguros - Plataforma de Leads Integrada ao Google Sheets

## ✅ O que esta versão faz:

- Permite criação e edição de usuários
- Permite atribuir leads a vendedores
- Permite alterar status de leads para "Fechado" ou "Perdido"
- Todas as ações feitas no sistema são salvas na planilha Google Sheets

---

## ⚙️ Como rodar o projeto localmente:

1. Certifique-se de ter o Node.js instalado
2. Execute no terminal:

```bash
npm install
npm run dev
```

---

## ☁️ Como configurar a integração com o Google Sheets

1. Abra sua planilha no Google Sheets
2. Vá em `Extensões > Apps Script`
3. Apague o conteúdo existente (se houver)
4. Copie o conteúdo do arquivo `script_gas.gs` (deste projeto)
5. Cole no editor e salve
6. Vá em `Implantar > Implantar como aplicativo da web`
   - Execute como: Você mesmo
   - Quem tem acesso: Qualquer pessoa
   - Copie o URL gerado após a implantação

7. No arquivo `src/services/leadService.jsx`, substitua:

```js
const GAS_URL = 'https://script.google.com/macros/s/SEU_DEPLOY_ID/exec';
```

Pelo seu URL real.

---

## 🌐 Como publicar no Vercel ou Render

- Escolha **Static Site** como tipo de projeto
- Certifique-se de que o `GAS_URL` está correto no build
- Após deploy, todas as alterações na plataforma refletirão no Google Sheets

---

Se tiver dúvidas, entre em contato com a desenvolvedora: Bárbara Inez
