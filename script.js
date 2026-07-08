document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-tab-btn');
    const sections = document.querySelectorAll('.tab-content');
    const languageButtons = document.querySelectorAll('.language-btn');
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const headerCta = document.querySelector('.header-cta');

    const copy = {
        pt: {
            lang: 'pt-BR',
            title: 'Whalexy Brasil - Entrada no Mercado',
            nav: ['Fundacao', 'Mercado', 'Beneficios', 'Precos', 'Estrategia'],
            cta: 'Contato',
            badges: [
                '1 / Sobre a Mobius Bloom',
                '2 / O que e Whalexy',
                '3 / Missao para o Brasil',
                '4 / Visao para o Brasil',
                '5 / Por que Brasil, por que agora',
                '7 / Dimensionamento de mercado',
                '6 / Beneficios para empresas brasileiras',
                '8 / Comparacao de precos',
                '8.1 / Recomendacao de estrategia de precos',
                '9 / Onde a Whalexy vence',
                '10 / Motor de venda por parceiros',
                '11 / Riscos e itens em aberto',
                'Iniciar credenciamento'
            ],
            titles: [
                'Sobre a Mobius Bloom',
                'O que e Whalexy',
                'Missao da Whalexy para o Brasil',
                'Visao da Whalexy para o Brasil',
                'Por que Brasil, por que agora',
                'TAM, SAM, SOM: Brasil',
                'Como a Whalexy beneficia empresas brasileiras',
                'Whalexy vs. mercado brasileiro',
                'Recomendacao de estrategia de precos',
                'Onde a Whalexy vence, e onde nao vence',
                'Entrada no Brasil pelo motor de venda por parceiros',
                'Leia antes de circular',
                'Candidate-se ao Programa de Canais Whalexy Brasil'
            ],
            subtitles: [
                'O venture studio por tras da Whalexy.',
                'Uma plataforma de automacao para WhatsApp Business API criada para micro, pequenas e medias empresas.',
                'Os fatos de mercado sustentam a tese.',
                'Estimativas bottom-up a partir de bases de empresas e faixas de preco SMB observadas, cruzadas com relatorios do setor.',
                'Mais vendas, atendimento mais rapido, compliance e precos transparentes sem a taxa enterprise.',
                'Os valores em BRL da Whalexy ainda sao placeholders e devem ser preenchidos apenas a partir da planilha mestra final.',
                'O modelo de parceiros comprovado, adaptado ao Brasil.',
                'Um documento so e robusto quando nomeia seus proprios pontos fracos.'
            ],
            cardTitles: [
                'Venture Studio',
                'Por que Brasil',
                'Campanhas de disparo',
                'Automacao com IA',
                'Caixa de entrada compartilhada',
                'Comercio dentro do chat',
                'Integracoes',
                'No-code primeiro',
                'Vender mais',
                'Atender mais rapido',
                'Manter compliance',
                'Evitar taxa enterprise',
                'Ancorar com cuidado',
                'Cobrar localmente',
                'Setup zero',
                'Preco contra a realidade',
                'Whalexy vence quando',
                'Whalexy deve recusar quando'
            ],
            paragraphs: [
                'Mobius Bloom Ventures Pvt. Ltd. e um venture studio de tecnologia sediado em Raipur, India. Construimos produtos de software para pequenas e medias empresas em mercados emergentes de alto crescimento, comecando por mercados parecidos com o nosso.',
                'O studio opera em modelo hub-and-spoke: uma equipe central de engenharia, especialistas em IA/ML e operadores de go-to-market constroi e escala produtos SaaS focados, cada um resolvendo um problema caro para donos de negocio que nao conseguem pagar software enterprise.',
                'Nosso produto principal e Whalexy, uma plataforma de automacao para WhatsApp Business API. Whalexy e onde comecam a receita, o aprendizado com clientes e a expansao internacional do studio.',
                'India e Brasil estao entre os maiores mercados de WhatsApp do mundo, e os problemas de um dono de MSME em Raipur e Sao Paulo sao quase identicos: muitas mensagens de clientes, pouca equipe, falta de automacao acessivel e fornecedores enterprise que ignoram esse publico. Construimos a Whalexy exatamente para esse tipo de negocio. Isso e uma vantagem transferivel, nao coincidencia.',
                'Envie promocoes e atualizacoes para milhares de clientes opt-in com taxas de abertura que e-mail nao consegue alcancar.',
                'Responda FAQs, qualifique leads, recupere carrinhos abandonados e confirme pedidos 24/7 sem aumentar equipe.',
                'Varios atendentes em um unico numero verificado de WhatsApp, com atribuicao, tags e historico completo de conversas.',
                'Descoberta de produtos, pedidos e pagamentos dentro da conversa.',
                'Conecta CRM, e-commerce e sistemas de pagamento que a empresa ja usa.',
                'Um lojista consegue configurar uma automacao funcional em uma tarde: sem desenvolvedor, sem consultor e sem projeto de seis semanas.',
                'Colocar automacao de WhatsApp de nivel enterprise nas maos de toda pequena empresa brasileira, por um preco que uma padaria, clinica ou loja de bairro consiga pagar.',
                'O Brasil roda no WhatsApp. Mas as plataformas que tornam o WhatsApp poderoso, como Take Blip, Zenvia e Infobip, foram criadas para bancos, telecoms e varejo enterprise. Seus precos comecam em milhares de reais por mes, o onboarding leva semanas e o processo de venda exige procurement.',
                'A missao da Whalexy no Brasil e fechar essa lacuna: acesso oficial a API da Meta, automacao com IA e ferramentas de campanha, self-serve, em portugues, precificado em reais e ativo em dias, nao meses.',
                'Ate 2030, ser a plataforma padrao de crescimento via WhatsApp para pequenas e medias empresas brasileiras, a ferramenta que um dono de negocio recomenda para outro.',
                'Meta esta empurrando empresas de disparadores cinza para a API oficial por meio de precificacao por conversa, atualizacoes de compliance da ANATEL e fiscalizacao da LGPD. Toda empresa forcada a migrar precisa de uma plataforma. Players enterprise nao vao atende-las no preco certo. A Whalexy vai.',
                'ARPU combinado assumido: [R$ ___/mes - definir preco final em BRL primeiro]. Os calculos ilustrativos usam R$ 150/mes, aproximadamente USD 27. O numero que importa nos proximos 12 meses nao e R$ 1,8B; e quantos parceiros a Whalexy assina e quantos clientes cada um fecha por mes.',
                'Campanhas de broadcast com 90%+ de abertura contra ~20% no e-mail.',
                'Recuperacao de carrinho e follow-ups automatizados que convertem 3-7% contra menos de 1% no e-mail.',
                'Catalogo no chat mais checkout Pix para o cliente descobrir, decidir e pagar dentro da conversa.',
                'Chatbots de IA resolvem ate 80% das perguntas rotineiras instantaneamente.',
                'Caixa compartilhada permite que uma equipe inteira trabalhe em um unico numero com atribuicao automatica.',
                'Automacao cobre as mesmas horas de um atendente parcial por uma fracao do custo.',
                'Acesso oficial a API da Meta: sem numeros banidos e sem disparadores cinza.',
                'Opt-in e registro de consentimento compativeis com LGPD integrados.',
                'Perfil comercial verificado: credibilidade desde a primeira mensagem.',
                'Sem taxas de setup de R$ 5.000-15.000.',
                'Sem ciclo consultivo de vendas e sem servicos profissionais obrigatorios.',
                'Onboarding self-serve em portugues, ativo em dias, com precos mensais em reais.',
                'Ancore entre ferramentas locais e Wati. A faixa SMB crivel no Brasil e R$ 100-300/mes all-in. Acima de R$ 300, a Whalexy compete com Wati sem marca; abaixo de R$ 100, parece ferramenta local rasa.',
                'Cobre em BRL por trilhos locais como Pix, boleto e cartoes locais. Cobranca em USD e a maior friccao autoinfligida da Wati no Brasil. Nao repita isso.',
                'Setup zero, para sempre. A taxa de setup de R$ 5K-15K e o fosso que os players enterprise criaram contra si mesmos. Transforme a ausencia dela na manchete.',
                'Decida a questao AiSensy com cuidado. No Brasil, a referencia de preco e Wati e ferramentas locais, nao AiSensy. Precifique contra o mercado que o cliente realmente enxerga.',
                'O comprador e uma pequena ou media empresa com 2-50 pessoas que vive no WhatsApp e superou o app gratuito.',
                'O comprador e sensivel a preco, rejeita taxa de setup e nao quer processo de procurement.',
                'O comprador atua em varejo, clinicas, educacao, alimentacao, imobiliario ou servicos locais: alto volume de mensagens e margens apertadas.',
                'O comprador chega por uma agencia ou consultor local, nao por uma equipe de vendas que a Whalexy teria que criar do zero.',
                'O comprador e banco, telecom ou grande varejista que precisa de orquestracao omnichannel, SLAs e servicos profissionais presenciais.',
                'O negocio quer disparo cinza para listas sem opt-in. A Whalexy nao atende esse segmento porque e risco de compliance e banimento de conta.',
                'Cadastre agencias de marketing digital brasileiras e consultores de WhatsApp que ja atendem SMBs. Use comissao recorrente por faixas, deck de parceiro em portugues, kit de vendas e onboarding remoto.',
                'Lance site em portugues, onboarding dentro do produto e cobranca Pix. Parceiros geram boca a boca; self-serve captura a demanda.',
                'Faca a primeira contratacao no Brasil, um partner manager, apenas quando o MRR originado por parceiros justificar.',
                'Pipeline nomeado ate agora: outreach iniciado para prospects de parceiros de canal brasileiros, incluindo contatos identificados via prospeccao no LinkedIn. A taxa de conversao de parceiros e o KPI unico que valida ou mata este plano.',
                'Fontes nomeadas no documento: Sebrae / Receita Federal, precificacao Meta WhatsApp Business, precos e relatorios publicos sobre Take Blip, Zenvia, Wati, AiSensy e ferramentas SMB brasileiras, alem de relatorios de dimensionamento do mercado. Os numeros sao estimativas de planejamento e devem ser revalidados antes de circular para investidores.',
                'Filtragem seletiva de agencias de publicidade, consultorias de software e integradores B2B focados em performance corporativa.',
                'Documento de entrada no mercado brasileiro por Mobius Bloom Ventures Pvt. Ltd.'
            ],
            visionList: [
                'SMB-first, sempre. O segmento negligenciado e a pequena empresa, onde a Whalexy cria densidade, boca a boca e defensabilidade.',
                'Distribuicao liderada por parceiros: agencias digitais, consultores e revendedores brasileiros com comissao recorrente.',
                'Produto totalmente localizado com interface e suporte em portugues, fluxos Pix, consentimento LGPD e precos em BRL.',
                'Agentes de IA generativa que conduzem conversas reais em portugues brasileiro.'
            ],
            timelineTitles: ['Recrutamento de parceiros de canal', 'Ativacao self-serve', 'Presenca no Brasil'],
            table1: [
                ['Sinal de mercado', 'O que significa para a Whalexy'],
                ['~148M usuarios de WhatsApp; ~165M usuarios diarios; 98,9% de penetracao entre usuarios de internet', 'WhatsApp nao e apenas um canal no Brasil. E O canal. Segundo maior mercado de WhatsApp do mundo.'],
                ['~10M empresas ja no WhatsApp Business; 96% das empresas brasileiras usam como canal primario de comunicacao', 'O problema de educacao do cliente ja esta resolvido. Empresas sabem que precisam de WhatsApp; faltam ferramentas.'],
                ['~24M pequenas empresas ativas, recorde historico e crescimento de ~10% YoY', 'A maior e mais rapida base SMB da America Latina, com 4,6M novas pequenas empresas abertas em 2025.'],
                ['A adocao da API esta em 18-22% entre medias e grandes empresas, mas e muito menor em SMBs', 'A camada enterprise esta saturada. A camada SMB esta aberta. Essa lacuna e a tese da Whalexy.'],
                ['Pagamentos Pix integram naturalmente conversas de WhatsApp; o WhatsApp Business App gera ~USD 46.800 de receita vitalicia por empresa no Brasil', 'Empresas brasileiras monetizam WhatsApp mais intensamente que qualquer mercado. A disposicao a pagar por ferramentas acompanha isso.']
            ],
            table2: [
                ['Camada', 'Definicao e tamanho', 'Valor anual ilustrativo'],
                ['TAM', 'Todas as ~24M pequenas empresas ativas no Brasil, mais mid-market. Universo realisticamente enderecavel por software: ~10M empresas ja ativas no WhatsApp Business.', '10M empresas x R$ 150/mes x 12 = ~R$ 18B, ou ~USD 3,2B de teto teorico.'],
                ['SAM', 'MEs/EPPs formalizadas com movimento de venda digital e capacidade de pagar SaaS: conservadoramente 8-12% das empresas ativas no WhatsApp, cerca de 800K-1,2M empresas.', '1M empresas x R$ 150/mes x 12 = ~R$ 1,8B, ou ~USD 320M de mercado atendivel.'],
                ['SOM (3 anos)', 'Participacao realisticamente obtivel por entrada via parceiros: 0,3-0,5% do SAM, cerca de 3.000-5.000 clientes pagantes no Ano 3.', '4.000 x R$ 150/mes x 12 = ~R$ 7,2M, ou ~USD 1,3M ARR apenas do Brasil no Ano 3.']
            ],
            table3: [
                ['Fornecedor', 'Preco de entrada mensal', 'Setup / onboarding', 'Posicionamento e fraqueza para SMBs'],
                ['Whalexy', '[R$ ___ /mes] Starter · [R$ ___] Growth · [R$ ___] Pro', 'R$ 0, self-serve, ativo em dias', 'SMB-first. IA, campanhas, caixa de equipe, fluxos Pix e sem taxa enterprise.'],
                ['Take Blip', 'Somente consultivo; tickets enterprise comecam em milhares de R$/mes', 'Setup reportado de R$ 5.000-15.000 + servicos profissionais; semanas de onboarding', 'BSP enterprise para Itau, Claro e Mercado Livre. Sem self-serve, sem plano gratuito. Fora do alcance SMB.'],
                ['Zenvia', 'Plano base nao publico; exige cotacao; usuarios extras US$ 29-39/mes; enterprise a partir de ~R$ 1.500/mes', 'Setup reportado de R$ 5.000-15.000; implementacao em varias semanas', 'Suite omnichannel listada na NASDAQ. Foco mid-market/enterprise, preco opaco e mais pesada do que SMB precisa.'],
                ['Wati', '~US$ 39-99/mes, aproximadamente R$ 210-540, cobrado em USD', 'Self-serve; suporte nativo em portugues limitado', 'Concorrente SMB global mais proximo. Bots de arvore de decisao, cobranca em USD, extras para rotacao de numero e presenca local fraca.'],
                ['AiSensy', '~US$ 12-40/mes equivalente; entrando no Brasil com conteudo PT', 'Self-serve', 'Player indiano SMB expandindo para o Brasil; valida o segmento. Ainda sem trilhos locais ou fluxos Pix nativos.'],
                ['Ferramentas SMB locais', '~R$ 99-300/mes', 'Self-serve', 'Baratas e locais, mas rasas: broadcast basico, pouca IA real, pouca profundidade de automacao e integracoes.']
            ],
            table4: [
                ['Risco / item em aberto', 'Por que importa', 'Responsavel / acao'],
                ['Preco final em BRL nao travado', 'Todo placeholder da Secao 8. Uma comparacao com lacunas nao pode ser compartilhada externamente, e precos inconsistentes viram risco de diligencia.', 'Ashish: travar planilha mestra e preencher todos os placeholders.'],
                ['Profundidade de compliance LGPD', 'Registro de consentimento, residencia de dados e requisitos de DPO. A afirmacao "LGPD-compliant" deve ser verificada por assessoria juridica brasileira.', 'Contratar revisao juridica BR antes do lancamento.'],
                ['Trilhos de pagamento ainda nao construidos', 'Pix/boleto sao prometidos no documento. Razorpay nao liquida BRL, entao um PSP local precisa ser escolhido e integrado.', 'Decisao tecnica + financeira; bloqueador pre-lancamento.'],
                ['Capacidade de suporte em portugues', 'SMBs self-serve cancelam rapido sem suporte no mesmo idioma. Suporte PT assistido por IA ajuda, mas o plano precisa de resposta explicita.', 'Definir modelo de suporte antes da Fase 2.'],
                ['Risco de foco vs. sprint de 100 dias na India', 'Entrada no Brasil compete pela mesma equipe pequena que executa crescimento na India. O sequenciamento precisa ser explicito.', 'Ashish: decisao de capacidade.'],
                ['Timing de players enterprise descendo para SMB', 'Se Zenvia ou Blip lancarem um tier SMB self-serve real, a janela da Whalexy comprime.', 'Monitoramento competitivo trimestral.']
            ],
            alert: [
                'Aviso de fonte unica:',
                'todo material comercial deve bater com esta tabela assim que o preco final for travado.',
                'As taxas por conversa da Meta se aplicam sobre todas as plataformas, incluindo a Whalexy. Isso e repasse da Meta, nao taxa de plataforma.'
            ],
            form: {
                badge: 'Iniciar credenciamento',
                title: 'Candidate-se ao Programa de Canais Whalexy Brasil',
                intro: 'Filtragem seletiva de agencias de publicidade, consultorias de software e integradores B2B focados em performance corporativa.',
                labels: ['Nome do Solicitante', 'E-mail Corporativo', 'Nome da Agencia / Consultoria', 'WhatsApp Corporativo (DDI+DDD)', 'Quantas PMEs ativas em seu portfolio possuem potencial para automacao imediata de WhatsApp?', 'Descreva brevemente sua experiencia com implementacoes de CRM ou automacao'],
                placeholders: ['Ex: Rodrigo Souza', 'Ex: nome@suaempresa.com.br', 'Ex: Souza Solucoes Digitais', 'Ex: 5511999999999', 'Detalhes adicionais de ferramentas integradas pelo seu time...'],
                options: ['Selecione uma faixa...', 'De 1 a 5 empresas', 'De 6 a 15 empresas', 'De 16 a 30 empresas', 'Mais de 30 empresas'],
                submit: 'Submeter Candidatura ao Comite Whalexy',
                sending: 'Enviando candidatura...',
                successTitle: 'Candidatura recebida com sucesso!',
                successBody: 'Nossa diretoria de expansao analisara seus dados e entrara em contato em ate 48 horas uteis.',
                reset: 'Preencher novo formulario',
                error: 'Erro ao enviar. Tente novamente.',
                connectionError: 'Erro de conexao. Tente novamente.',
                subject: 'Nova Candidatura de Parceria B2B - Whalexy'
            },
            footer: ['WHALEXY', 'Navegacao', 'Status', 'Rascunho interno de trabalho<br>Precificacao pendente de aprovacao final', 'Missao · Visao · Oportunidade de Mercado · Precificacao Competitiva']
        },
        en: {
            lang: 'en',
            title: 'Whalexy Brazil Market Entry',
            nav: ['Foundation', 'Market', 'Benefits', 'Pricing', 'Strategy'],
            cta: 'Contact',
            badges: [
                '1 / About Mobius Bloom',
                '2 / What is Whalexy',
                '3 / Mission for Brazil',
                '4 / Vision for Brazil',
                '5 / Why Brazil, Why Now',
                '7 / Market Sizing',
                '6 / Brazilian Business Benefits',
                '8 / Price Comparison',
                '8.1 / Pricing Strategy Recommendation',
                '9 / Where Whalexy Wins',
                '10 / Partner-Closed Engine',
                '11 / Risks and Open Items',
                'Start Accreditation'
            ],
            titles: [
                'About Mobius Bloom',
                'What is Whalexy',
                "Whalexy's Mission for Brazil",
                "Whalexy's Vision for Brazil",
                'Why Brazil, Why Now',
                'TAM, SAM, SOM: Brazil',
                'How Whalexy Benefits Brazilian Businesses',
                'Whalexy vs. Brazilian Market',
                'Pricing Strategy Recommendation',
                "Where Whalexy Wins, and Where It Doesn't",
                'Brazil Entry Runs on the Partner-Closed Engine',
                'Read Before Circulating',
                'Apply to the Whalexy Brazil Channel Program'
            ],
            subtitles: [
                'The venture studio behind Whalexy.',
                'A WhatsApp Business API automation platform built for micro, small, and medium businesses.',
                'The market facts make the case on their own.',
                'Bottom-up estimates from business counts and observed SMB pricing bands, cross-checked against industry reports.',
                'More sales, faster service, compliance, and transparent pricing without the enterprise tax.',
                "Whalexy's own BRL figures remain placeholders and must be filled from the finalised master pricing sheet only.",
                'The proven partner model, adapted for Brazil.',
                'A document is only foolproof if it names its own weak points.'
            ],
            cardTitles: [
                'Venture Studio',
                'Why Brazil',
                'Broadcast Campaigns',
                'AI Automation',
                'Shared Team Inbox',
                'In-Chat Commerce',
                'Integrations',
                'No-Code First',
                'Sell More',
                'Serve Faster',
                'Stay Compliant',
                'Avoid Enterprise Tax',
                'Anchor Carefully',
                'Bill Locally',
                'Zero Setup Fee',
                'Price Against Reality',
                'Whalexy Wins When',
                'Whalexy Should Walk Away When'
            ],
            paragraphs: [
                'Mobius Bloom Ventures Pvt. Ltd. is a technology venture studio headquartered in Raipur, India. We build software products for small and medium businesses in high-growth emerging markets, starting with markets that look like ours.',
                'The studio operates on a hub-and-spoke model: a central team of engineers, AI/ML specialists, and go-to-market operators builds and scales focused SaaS products, each solving one expensive problem for business owners who cannot afford enterprise software.',
                "Our flagship product is Whalexy, a WhatsApp Business API automation platform. Whalexy is where the studio's revenue, customer learning, and international expansion begin.",
                'India and Brazil are the two largest WhatsApp markets on Earth, and the problems of an MSME owner in Raipur and Sao Paulo are nearly identical: too many customer messages, too few staff, no affordable automation, and enterprise vendors that ignore them. We built Whalexy for exactly this business owner. That is a transferable advantage, not a coincidence.',
                'Send promotions and updates to thousands of opted-in customers with open rates email cannot touch.',
                'Answer FAQs, qualify leads, recover abandoned carts, and confirm orders 24/7 without adding headcount.',
                'Multiple agents on one verified WhatsApp number, with assignment, tags, and full conversation history.',
                'Product discovery, ordering, and payment inside the conversation.',
                'Connects to CRM, e-commerce, and payment systems a business already runs.',
                'A shop owner sets up a working automation in an afternoon: no developer, no consultant, no six-week implementation project.',
                'To put enterprise-grade WhatsApp automation in the hands of every Brazilian small business, at a price a padaria, a clinica, or a loja de bairro can actually pay.',
                'Brazil runs on WhatsApp. But the platforms that make WhatsApp powerful, such as Take Blip, Zenvia, and Infobip, were built for banks, telecoms, and enterprise retail. Their pricing starts in the thousands of reais per month, their onboarding takes weeks, and their sales process requires a procurement department.',
                "Whalexy's mission in Brazil is to close that gap: official Meta API access, AI automation, and campaign tools, self-serve, in Portuguese, priced in reais, and live in days, not months.",
                "By 2030, to be the default WhatsApp growth platform for Brazil's small and medium businesses, the tool a business owner recommends to another business owner.",
                "Meta's per-conversation pricing, ANATEL compliance updates, and LGPD enforcement are pushing businesses off grey-market bulk senders and onto the official API. Every business forced to migrate needs a platform. Enterprise players will not serve them at their price point. Whalexy will.",
                'Assumed blended ARPU: [R$ ___/month - set final BRL pricing first]. Illustrative calculations use R$ 150/month, approximately USD 27. The number that matters for the next 12 months is not R$ 1.8B; it is how many channel partners Whalexy signs and how many customers each one closes per month.',
                'Campaign broadcasts with 90%+ open rates versus ~20% for email.',
                'Abandoned cart recovery and automated follow-ups that convert at 3-7% versus under 1% for email.',
                'In-chat catalogue plus Pix checkout so customers discover, decide, and pay inside the conversation.',
                'AI chatbots resolve up to 80% of routine questions instantly.',
                'Shared inbox lets a whole team work one WhatsApp number with automatic assignment.',
                'Automation covers the same hours as a part-time attendant for a fraction of the cost.',
                'Official Meta API access: no banned numbers, no grey-market bulk senders.',
                'LGPD-compliant opt-in and consent logging built in.',
                'Verified business profile: credibility with customers from the first message.',
                'No R$ 5,000-15,000 setup fees.',
                'No consultative sales cycle or mandatory professional services.',
                'Self-serve onboarding in Portuguese, live in days, with monthly pricing in reais.',
                'Anchor between the local tools and Wati. The credible SMB band in Brazil is R$ 100-300/month all-in. Entering above R$ 300 puts Whalexy against Wati with no brand; entering below R$ 100 signals "thin local tool."',
                "Bill in BRL via local rails such as Pix, boleto, and local cards. USD billing is Wati's single biggest self-inflicted wound in Brazil. Do not repeat it.",
                "Zero setup fee, forever. The R$ 5-15K setup fee is the enterprise players' moat against themselves. Make its absence the headline.",
                'Decide the AiSensy question deliberately. In Brazil, the reference price is Wati and local tools, not AiSensy. Price against the market customers actually see.',
                'The buyer is a small or medium business with 2-50 people that lives on WhatsApp and has outgrown the free app.',
                'The buyer is price-sensitive, allergic to setup fees, and unwilling to run a procurement process.',
                'The buyer works in retail, clinics, education, food service, real estate, or local services: high message volume, thin margins.',
                'The buyer is reached through a local agency or consultant rather than a sales team Whalexy would have to build from zero.',
                'The buyer is a bank, telecom, or enterprise retailer needing omnichannel orchestration, SLAs, and on-site professional services.',
                'The business wants grey-market bulk blasting to non-opted-in lists. Whalexy does not serve this segment because it is a compliance and account-ban risk.',
                'Target Brazilian digital marketing agencies and WhatsApp consultants already serving SMBs. Use slab-based recurring commission, Portuguese partner deck and sales kit, and remote onboarding.',
                'Launch Portuguese website, in-product onboarding, and Pix billing. Partners generate the word-of-mouth; self-serve captures it.',
                'Make the first Brazil-based hire, a partner manager, once partner-sourced MRR justifies it, not before.',
                'Named pipeline to date: outreach initiated to Brazilian channel partner prospects, including contacts identified via LinkedIn prospecting. Partner conversion rate is the single KPI that validates or kills this plan.',
                'Sources named in the document: Sebrae / Receita Federal business counts, Meta WhatsApp Business pricing, public pricing and market reporting on Take Blip, Zenvia, Wati, AiSensy and Brazilian SMB tools, and industry market-sizing reports. Figures are planning estimates and should be re-verified before investor circulation.',
                'Selective screening of advertising agencies, software consultancies, and B2B integrators focused on corporate performance.',
                'Brazil Market Entry Document by Mobius Bloom Ventures Pvt. Ltd.'
            ],
            visionList: [
                'SMB-first, always. The underserved segment is small business, where Whalexy builds density, word-of-mouth, and defensibility.',
                'Partner-led distribution through Brazilian digital agencies, consultants, and resellers with recurring commission.',
                'Fully localised product with Portuguese-first interface and support, Pix-native payment flows, LGPD-compliant consent management, and BRL pricing.',
                'Generative AI agents that handle real conversations in Brazilian Portuguese.'
            ],
            timelineTitles: ['Channel Partner Recruitment', 'Self-Serve Activation', 'In-Country Presence'],
            table1: [
                ['Market signal', 'What it means for Whalexy'],
                ['~148M WhatsApp users; ~165M daily users; 98.9% penetration among internet users', 'WhatsApp is not a channel in Brazil. It is THE channel. Second-largest WhatsApp market in the world.'],
                ['~10M businesses already on WhatsApp Business; 96% of Brazilian businesses use it as a primary communication tool', 'The customer education problem is already solved. Businesses know they need WhatsApp; they just lack tools.'],
                ['~24M active small businesses, record high and growing ~10% YoY', 'The largest, fastest-growing SMB base in Latin America, with 4.6M new small businesses opened in 2025 alone.'],
                ['API adoption at 18-22% among medium and large enterprises, but a fraction of that among SMBs', "The enterprise layer is saturated. The SMB layer is wide open. That gap is Whalexy's entire thesis."],
                ['Pix payments integrate natively into WhatsApp conversations; WhatsApp Business App generates ~USD 46,800 lifetime revenue per business in Brazil', 'Brazilian businesses monetise WhatsApp harder than any market on Earth. Willingness to pay for tools follows.']
            ],
            table2: [
                ['Layer', 'Definition & size', 'Annual value (illustrative)'],
                ['TAM', 'All ~24M active small businesses in Brazil, plus mid-market. Realistic software-addressable universe: the ~10M businesses already active on WhatsApp Business.', '10M businesses x R$ 150/mo x 12 = ~R$ 18B, or ~USD 3.2B theoretical ceiling.'],
                ['SAM', 'Formalised MEs/EPPs with digital sales motion and capacity to pay for SaaS: conservatively 8-12% of WhatsApp-active businesses, around 800K-1.2M businesses.', '1M businesses x R$ 150/mo x 12 = ~R$ 1.8B, or ~USD 320M serviceable market.'],
                ['SOM (3 yr)', 'Realistic obtainable share via partner-led entry: 0.3-0.5% of SAM, around 3,000-5,000 paying customers by Year 3.', '4,000 x R$ 150/mo x 12 = ~R$ 7.2M, or ~USD 1.3M ARR from Brazil alone by Year 3.']
            ],
            table3: [
                ['Provider', 'Entry price (monthly)', 'Setup / onboarding', 'Positioning & weakness for SMBs'],
                ['Whalexy', '[R$ ___ /mo] Starter · [R$ ___] Growth · [R$ ___] Pro', 'R$ 0, self-serve, live in days', 'SMB-first. AI automation, campaigns, team inbox, Pix flows, no enterprise tax.'],
                ['Take Blip', 'Consultative only; enterprise tickets start in the thousands of R$/month', 'R$ 5,000-15,000 setup plus mandatory professional services; weeks of onboarding', 'Enterprise BSP for Itau, Claro, Mercado Livre. No self-serve, no free plan. Priced out of SMB entirely.'],
                ['Zenvia', 'Base plan not public; quotation required; extra users US$ 29-39/mo; enterprise from ~R$ 1,500/mo', 'Setup fees reported R$ 5,000-15,000; multi-week implementation', 'NASDAQ-listed omnichannel suite. Mid-market and enterprise focus; opaque pricing; heavier than an SMB needs.'],
                ['Wati', '~US$ 39-99/mo, approximately R$ 210-540, billed in USD', 'Self-serve; limited Portuguese-native support', 'Closest SMB competitor globally. Decision-tree bots, USD billing, extra charges for number rotation, weak local presence.'],
                ['AiSensy', '~US$ 12-40/mo equivalent; entering Brazil with PT content', 'Self-serve', 'Indian SMB player expanding into Brazil; validates the segment. No local payment rails or Pix-native flows yet.'],
                ['Local SMB tools', '~R$ 99-300/mo', 'Self-serve', 'Cheap and local, but thin: basic broadcast tools, little real AI, limited automation depth and integrations.']
            ],
            table4: [
                ['Risk / open item', 'Why it matters', 'Owner / action'],
                ['Final BRL pricing not locked', 'Every placeholder in Section 8. A price comparison with blanks cannot be shared externally, and inconsistent pricing across collateral is a live diligence risk.', 'Ashish: lock master pricing sheet, then fill all placeholders.'],
                ['LGPD compliance depth', 'Consent logging, data residency questions, and DPO requirements. "LGPD-compliant" must be verified by Brazilian counsel before any external use.', 'Engage BR legal review before launch.'],
                ['Payment rails not yet built', 'Pix/boleto billing is promised throughout this document. Razorpay does not settle BRL, so a local PSP must be selected and integrated.', 'Tech plus finance decision; pre-launch blocker.'],
                ['Portuguese support capacity', 'Self-serve SMBs churn fast without same-language support. AI-assisted PT support can bridge, but the plan needs an explicit answer.', 'Define support model before Phase 2.'],
                ['Focus risk vs. India 100-day sprint', 'Brazil entry competes for the same small team executing the India growth sprint. Sequencing must be explicit.', 'Ashish: capacity call.'],
                ['Timing of enterprise players moving down-market', "Zenvia or Blip launching a genuine self-serve SMB tier would compress Whalexy's window. Monitor quarterly.", 'Competitive watch, quarterly.']
            ],
            alert: [
                'Single source of truth warning:',
                'every collateral document must match this table once final pricing is locked.',
                "Meta's per-conversation fees apply on top of every platform, including Whalexy. This is a Meta pass-through, not a platform fee."
            ],
            form: {
                badge: 'Start Accreditation',
                title: 'Apply to the Whalexy Brazil Channel Program',
                intro: 'Selective screening of advertising agencies, software consultancies, and B2B integrators focused on corporate performance.',
                labels: ['Applicant Name', 'Corporate Email', 'Agency / Consultancy Name', 'Corporate WhatsApp (country + area code)', 'How many active SMBs in your portfolio have immediate WhatsApp automation potential?', 'Briefly describe your experience with CRM or automation implementations'],
                placeholders: ['Ex: Rodrigo Souza', 'Ex: name@yourcompany.com.br', 'Ex: Souza Digital Solutions', 'Ex: 5511999999999', 'Additional details about tools integrated by your team...'],
                options: ['Select a range...', '1 to 5 businesses', '6 to 15 businesses', '16 to 30 businesses', 'More than 30 businesses'],
                submit: 'Submit Application to Whalexy Committee',
                sending: 'Sending application...',
                successTitle: 'Application received successfully!',
                successBody: 'Our expansion leadership will review your details and contact you within 48 business hours.',
                reset: 'Fill a new form',
                error: 'Submission failed. Try again.',
                connectionError: 'Connection error. Try again.',
                subject: 'New B2B Partnership Application - Whalexy'
            },
            footer: ['WHALEXY', 'Navigation', 'Status', 'Internal working draft<br>Final pricing approval pending', 'Mission · Vision · Market Opportunity · Competitive Pricing']
        }
    };

    const selectAll = (selector) => Array.from(document.querySelectorAll(selector));
    const setTexts = (selector, values) => selectAll(selector).forEach((el, index) => {
        if (values[index] !== undefined) el.textContent = values[index];
    });
    const setList = (list, values) => {
        if (!list) return;
        Array.from(list.querySelectorAll('li')).forEach((item, index) => {
            if (values[index] !== undefined) item.textContent = values[index];
        });
    };
    const setParagraphs = (values) => {
        const cardValues = [...values.slice(0, 10), ...values.slice(28, 32)];
        selectAll('.card-desc:not(.large-copy)').forEach((el, index) => {
            if (cardValues[index] !== undefined) el.textContent = cardValues[index];
        });
        selectAll('.large-copy').forEach((el, index) => {
            if (values[index + 10] !== undefined) el.textContent = values[index + 10];
        });
        const notes = [values[14], values[15], values[41], values[42]];
        selectAll('.section-note').forEach((el, index) => {
            if (notes[index] !== undefined) el.textContent = notes[index];
        });
        selectAll('.timeline-desc').forEach((el, index) => {
            if (values[index + 38] !== undefined) el.textContent = values[index + 38];
        });
        const contactIntro = document.querySelector('#contact .cta-box > p');
        if (contactIntro) contactIntro.textContent = values[43];
        const footerIntro = document.querySelector('.footer-brand p');
        if (footerIntro) footerIntro.textContent = values[44];
    };
    const setCardTitles = (values) => selectAll('.card-title').forEach((el, index) => {
        if (values[index] === undefined) return;
        const icon = el.querySelector('i')?.outerHTML || '';
        el.innerHTML = `${icon} ${values[index]}`;
    });
    const setTable = (tableIndex, rows) => {
        const table = selectAll('table')[tableIndex];
        if (!table) return;
        const headerCells = Array.from(table.querySelectorAll('thead th'));
        rows[0].forEach((text, index) => {
            if (headerCells[index]) headerCells[index].textContent = text;
        });
        Array.from(table.querySelectorAll('tbody tr')).forEach((row, rowIndex) => {
            Array.from(row.children).forEach((cell, cellIndex) => {
                const value = rows[rowIndex + 1]?.[cellIndex];
                if (value !== undefined) cell.textContent = value;
            });
        });
    };

    let currentLang = localStorage.getItem('whalexy-language') || 'pt';

    const applyLanguage = (lang) => {
        const data = copy[lang];
        currentLang = lang;
        localStorage.setItem('whalexy-language', lang);
        document.documentElement.lang = data.lang;
        document.title = data.title;

        setTexts('.nav-tab-btn', data.nav);
        document.querySelector('.header-cta').textContent = data.cta;
        setTexts('.section-badge', data.badges);
        setTexts('.section-title', data.titles);
        setTexts('.section-subtitle', data.subtitles);
        setCardTitles(data.cardTitles);
        setParagraphs(data.paragraphs);
        const lists = selectAll('.doc-list');
        setList(lists[0], data.visionList);
        setList(lists[1], data.paragraphs.slice(16, 19));
        setList(lists[2], data.paragraphs.slice(19, 22));
        setList(lists[3], data.paragraphs.slice(22, 25));
        setList(lists[4], data.paragraphs.slice(25, 28));
        setList(lists[5], data.paragraphs.slice(32, 36));
        setList(lists[6], data.paragraphs.slice(36, 38));
        setTexts('.timeline-title', data.timelineTitles);
        setTable(0, data.table1);
        setTable(1, data.table2);
        setTable(2, data.table3);
        setTable(3, data.table4);

        const alertParagraphs = selectAll('.alert-content p');
        if (alertParagraphs[0]) alertParagraphs[0].innerHTML = `<strong>${data.alert[0]}</strong> ${data.alert[1]}`;
        if (alertParagraphs[1]) alertParagraphs[1].textContent = data.alert[2];

        const labels = selectAll('#partner-application-form label');
        labels.forEach((label, index) => {
            if (data.form.labels[index] !== undefined) label.textContent = data.form.labels[index];
        });
        const formInputs = [
            document.getElementById('partner-name'),
            document.getElementById('partner-email'),
            document.getElementById('partner-company'),
            document.getElementById('partner-whatsapp'),
            document.getElementById('partner-message')
        ];
        formInputs.forEach((input, index) => {
            if (input && data.form.placeholders[index] !== undefined) input.placeholder = data.form.placeholders[index];
        });
        selectAll('#partner-clients option').forEach((option, index) => {
            if (data.form.options[index] !== undefined) option.textContent = data.form.options[index];
        });
        const subject = document.querySelector('input[name="subject"]');
        if (subject) subject.value = data.form.subject;
        const submit = document.querySelector('#partner-application-form button[type="submit"]');
        if (submit) submit.textContent = data.form.submit;

        const footerHeadings = selectAll('.footer-links h5');
        if (footerHeadings[0]) footerHeadings[0].textContent = data.footer[1];
        if (footerHeadings[1]) footerHeadings[1].textContent = data.footer[2];
        const status = document.querySelector('.footer-links:last-child p');
        if (status) status.innerHTML = data.footer[3];
        const footerBottom = selectAll('.footer-bottom p');
        if (footerBottom[1]) footerBottom[1].textContent = data.footer[4];
        const footerNavLinks = selectAll('.footer-links')[0]?.querySelectorAll('a') || [];
        Array.from(footerNavLinks).forEach((link, index) => {
            if (data.nav[index] !== undefined) link.textContent = data.nav[index];
        });

        languageButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
    };

    const setActiveNav = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const setMenuOpen = (isOpen) => {
        if (!header || !menuToggle) return;
        header.classList.toggle('menu-open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars', !isOpen);
            icon.classList.toggle('fa-xmark', isOpen);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveNav(entry.target.id);
            }
        });
    }, {
        root: null,
        rootMargin: '-22% 0px -62% 0px',
        threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            setMenuOpen(!header?.classList.contains('menu-open'));
        });
    }

    navLinks.forEach((link) => link.addEventListener('click', () => {
        const id = link.getAttribute('href')?.replace('#', '');
        if (id) setActiveNav(id);
        setMenuOpen(false);
    }));
    languageButtons.forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.lang));
    });
    headerCta?.addEventListener('click', () => setMenuOpen(false));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuOpen(false);
    });

    applyLanguage(currentLang);

    const revealElements = document.querySelectorAll(
        '.card, .section-header, .table-wrapper, .stats-panel, .calc-container, .checklist-container, .timeline-item, .integration-pill'
    );

    revealElements.forEach((element, index) => {
        element.classList.add('reveal-hidden');
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 0.08}s`;
    });

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));

    const partnerForm = document.getElementById('partner-application-form');
    if (partnerForm) {
        partnerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const data = copy[currentLang];
            const submitButton = partnerForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = data.form.sending;

            const formData = new FormData(partnerForm);
            const payload = JSON.stringify(Object.fromEntries(formData));

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: payload
            })
                .then(async (response) => {
                    const result = await response.json();

                    if (response.status === 200) {
                        partnerForm.innerHTML = `
                            <div style="text-align: center; padding: 2rem 0; animation: fadeIn 0.4s ease-out forwards;">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                                <h4 style="margin-bottom: 0.5rem; color: #ffffff;">${data.form.successTitle}</h4>
                                <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                                    ${data.form.successBody}
                                </p>
                                <button class="btn btn-secondary" onclick="window.location.reload()">${data.form.reset}</button>
                            </div>
                        `;
                        return;
                    }

                    console.log(result);
                    submitButton.disabled = false;
                    submitButton.innerHTML = data.form.error;
                })
                .catch((error) => {
                    console.log(error);
                    submitButton.disabled = false;
                    submitButton.innerHTML = data.form.connectionError;
                });
        });
    }
});
