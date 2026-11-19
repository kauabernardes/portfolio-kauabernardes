import { portfolioData } from '../data/portfolioData';

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const downloadFormattedResume = () => {
  const {
    profile,
    experiences,
    projects,
    academics,
    certifications,
    stackCategories,
  } = portfolioData;

  if (profile.customResumePdfUrl) {
    const link = document.createElement('a');
    link.href = profile.customResumePdfUrl;
    link.download = 'Curriculo-Kaua-Bernardes.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  const printWindow = window.open('', '_blank', 'width=900,height=1100');
  if (!printWindow) {
    window.print();
    return;
  }

  const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Currículo — ${escapeHtml(profile.name)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
    <style>
      @page {
        size: A4;
        margin: 14mm 16mm;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #141212;
        background: #ffffff;
        line-height: 1.45;
        font-size: 10.5pt;
        max-width: 820px;
        margin: 0 auto;
        padding: 24px;
      }
      @media print {
        body {
          padding: 0;
        }
        .no-print {
          display: none !important;
        }
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #0D0909;
        color: #D4D4D4;
        padding: 12px 18px;
        border-radius: 12px;
        margin-bottom: 24px;
      }
      .toolbar button {
        background: #F24916;
        color: #0D0909;
        border: none;
        padding: 8px 16px;
        border-radius: 999px;
        font-family: inherit;
        font-weight: 700;
        font-size: 13px;
        cursor: pointer;
      }
      header {
        border-bottom: 2px solid #0D0909;
        padding-bottom: 12px;
        margin-bottom: 14px;
      }
      h1 {
        font-size: 22pt;
        font-weight: 800;
        color: #0D0909;
        letter-spacing: -0.02em;
      }
      .role {
        font-size: 11.5pt;
        font-weight: 700;
        color: #2F7347;
        margin-top: 2px;
      }
      .contact-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 8px;
        font-size: 9.5pt;
        color: #444;
      }
      .contact-bar a {
        color: #141212;
        text-decoration: none;
      }
      section {
        margin-bottom: 14px;
      }
      h2 {
        font-size: 11pt;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #0D0909;
        border-bottom: 1px solid #DCDCDC;
        padding-bottom: 3px;
        margin-bottom: 8px;
      }
      .summary p {
        font-size: 9.8pt;
        color: #262626;
        text-align: justify;
        margin-bottom: 5px;
      }
      .item {
        margin-bottom: 10px;
      }
      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .item-title {
        font-weight: 700;
        font-size: 10.5pt;
        color: #0D0909;
      }
      .item-meta {
        font-size: 9pt;
        font-weight: 600;
        color: #555;
        white-space: nowrap;
      }
      .item-sub {
        font-size: 9.5pt;
        font-weight: 600;
        color: #2F7347;
        margin-bottom: 3px;
      }
      ul.bullets {
        padding-left: 16px;
        margin-top: 3px;
      }
      ul.bullets li {
        font-size: 9.5pt;
        color: #262626;
        margin-bottom: 2px;
      }
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 16px;
      }
      .stack-line {
        font-size: 9.5pt;
        margin-bottom: 3px;
      }
      .stack-line strong {
        color: #0D0909;
      }
      .cert-item {
        font-size: 9.5pt;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #EBEBEB;
        padding: 2px 0;
      }
    </style>
  </head>
  <body>
    <div class="toolbar no-print">
      <span>Pré-visualização do Currículo Formatado (A4)</span>
      <button onclick="window.print()">Salvar como PDF / Imprimir</button>
    </div>

    <header>
      <h1>${escapeHtml(profile.name)}</h1>
      <div class="role">${escapeHtml(profile.role)} — Full-Stack & Automação (RPA)</div>
      <div class="contact-bar">
        <span>${escapeHtml(profile.location)}</span>
        <span>•</span>
        <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
        <span>•</span>
        <a href="${escapeHtml(profile.linkedin)}">linkedin.com/in/kauabernardes</a>
        <span>•</span>
        <a href="${escapeHtml(profile.github)}">github.com/kauabernardes</a>
      </div>
    </header>

    <section class="summary">
      <h2>Resumo Profissional</h2>
      ${profile.aboutBio.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
    </section>

    <section>
      <h2>Experiência Profissional & Pesquisa</h2>
      ${experiences
        .map(
          (exp) => `
        <div class="item">
          <div class="item-header">
            <span class="item-title">${escapeHtml(exp.role)}</span>
            <span class="item-meta">${escapeHtml(exp.period)}</span>
          </div>
          <div class="item-sub">${escapeHtml(exp.company)} — ${escapeHtml(exp.location)}</div>
          <ul class="bullets">
            ${exp.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
          </ul>
        </div>`
        )
        .join('')}
    </section>

    <section>
      <h2>Projetos de Destaque</h2>
      ${projects
        .map(
          (proj) => `
        <div class="item">
          <div class="item-header">
            <span class="item-title">${escapeHtml(proj.title)} (${escapeHtml(proj.context)})</span>
            <span class="item-meta">${escapeHtml(proj.year)}</span>
          </div>
          <p style="font-size: 9.5pt; color: #262626;">${escapeHtml(proj.summary)} <strong>[${escapeHtml(
            proj.tags.join(', ')
          )}]</strong></p>
        </div>`
        )
        .join('')}
    </section>

    <section>
      <h2>Competências Técnicas</h2>
      ${stackCategories
        .map(
          (cat) => `
        <div class="stack-line">
          <strong>${escapeHtml(cat.title)}:</strong> ${escapeHtml(cat.items.join(', '))}
        </div>`
        )
        .join('')}
    </section>

    <section>
      <h2>Formação Acadêmica</h2>
      ${academics
        .map(
          (acad) => `
        <div class="item">
          <div class="item-header">
            <span class="item-title">${escapeHtml(acad.degree)}</span>
            <span class="item-meta">${escapeHtml(acad.period)}</span>
          </div>
          <div class="item-sub">${escapeHtml(acad.institution)}</div>
        </div>`
        )
        .join('')}
    </section>

    <section>
      <h2>Cursos Complementares & Certificações</h2>
      <div class="grid-2">
        ${certifications
          .map(
            (cert) => `
          <div class="cert-item">
            <span><strong>${escapeHtml(cert.title)}</strong> — ${escapeHtml(cert.issuer)}</span>
            <span>${cert.workload ? escapeHtml(cert.workload) : ''}</span>
          </div>`
          )
          .join('')}
      </div>
    </section>

    <script>
      window.onload = function() {
        setTimeout(function() {
          window.print();
        }, 350);
      };
    </script>
  </body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
};
