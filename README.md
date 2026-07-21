# pampasky-site

Versão estática da landing do **PampaSky**, publicada via GitHub Pages.

⚠️ **Não edite os arquivos daqui à mão.** Eles são gerados.

O código-fonte vive no repositório privado `pampasky`. Para atualizar esta página:

```bash
# no projeto pampasky
php build.php              # regenera docs/
cp -r docs/* ../pampasky-site/

# neste repositório
git add -A && git commit -m "atualiza pagina" && git push
```

O Pages republica sozinho em ~1 minuto após o push.

## O que tem aqui

Só a landing. O portal do morador (login, painel, alertas, banco SQLite) é PHP
e **não roda no GitHub Pages** — aquilo exige hospedagem com PHP.

O formulário de lead também não existe nesta versão: sem PHP não há
`contato.php` para receber o POST, então o `build.php` troca o formulário
por um botão de WhatsApp.
