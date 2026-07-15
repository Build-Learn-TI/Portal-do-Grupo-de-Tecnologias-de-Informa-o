# Como contribuir

## 1. Escolher uma tarefa

- Consulte as issues abertas;
- Confirme a branch indicada na issue;
- Não trabalhe directamente em `main` ou `dev`.

## 2. Actualizar a branch local

```bash
git checkout dev
git pull origin dev
git checkout nome-da-branch
```

## 3. Desenvolver a tarefa

- Faça apenas alterações relacionadas com a issue;
- Mantenha HTML, CSS e JavaScript organizados;
- Teste as alterações antes de enviar;
- Não adicione ficheiros desnecessários.

## 4. Criar commits claros

Use mensagens curtas e objectivas:

```text
feat: adicionar secção de recursos
fix: corrigir menu móvel
style: ajustar cartões em telemóveis
docs: actualizar README
test: verificar navegação por teclado
chore: configurar GitHub Pages
```

## 5. Enviar a branch

```bash
git add .
git commit -m "tipo: descrição da alteração"
git push origin nome-da-branch
```

## 6. Abrir Pull Request

- Abra o Pull Request para a branch `dev`;
- Relacione a issue usando `Closes #numero`;
- Descreva o que foi alterado;
- Adicione imagens quando houver mudanças visuais;
- Aguarde revisão antes de fazer merge.

## 7. Revisão e merge

- Pelo menos um membro deve rever a alteração;
- Testes e pedidos de alteração devem ser resolvidos;
- `main` recebe apenas a versão testada e aprovada de `dev`;
- Não faça merge do seu próprio Pull Request sem revisão.

## Regras gerais

- Respeite o trabalho dos restantes membros;
- Evite alterar ficheiros que pertencem a outra tarefa sem coordenação;
- Nunca envie palavras-passe, tokens ou dados pessoais para o repositório;
- Comunique bloqueios ou dúvidas na respectiva issue.