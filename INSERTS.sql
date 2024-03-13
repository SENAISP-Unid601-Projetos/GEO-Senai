-- Inserir administradores
INSERT INTO Administrador (usuario_admin, senha_admin) VALUES
('admin1', 'senha1'),
('admin2', 'senha2'),
('admin3', 'senha3');

-- Inserir turmas
INSERT INTO Turma (codigo_turma, nome_curso, sala_turma, duracao_curso, desc_curso) VALUES
('T001', 'Curso de Programação Web', 'Sala A', '3 meses', 'Este curso aborda os fundamentos do desenvolvimento web.'),
('T002', 'Curso de Marketing Digital', 'Sala B', '2 meses', 'Aprenda estratégias de marketing digital para alavancar negócios online.'),
('T003', 'Curso de Design Gráfico', 'Sala C', '4 meses', 'Explore as técnicas de design gráfico e crie layouts incríveis.'),
('T004', 'Curso de Fotografia', 'Sala D', '2 meses', 'Aprenda os fundamentos da fotografia digital e técnicas de composição.'),
('T005', 'Curso de Inglês Avançado', 'Sala E', '6 meses', 'Aprimore suas habilidades no idioma inglês em conversação e gramática.'),
('T006', 'Curso de Marketing de Conteúdo', 'Sala F', '3 meses', 'Descubra como criar conteúdo relevante e engajador para atrair clientes.'),
('T007', 'Curso de Administração Financeira', 'Sala G', '5 meses', 'Aprenda a gerenciar as finanças pessoais e empresariais de forma eficiente.'),
('T008', 'Curso de Programação em Python', 'Sala H', '4 meses', 'Domine a linguagem de programação Python e suas aplicações.'),
('T009', 'Curso de Gestão de Projetos', 'Sala I', '3 meses', 'Conheça metodologias e ferramentas para gerenciar projetos de forma eficaz.'),
('T010', 'Curso de Marketing de Redes Sociais', 'Sala J', '2 meses', 'Aprenda a criar campanhas eficazes nas principais redes sociais.'),
('T011', 'Curso de Desenvolvimento Mobile', 'Sala K', '6 meses', 'Desenvolva aplicativos móveis para Android e iOS utilizando frameworks modernos.'),
('T012', 'Curso de AutoCAD', 'Sala L', '3 meses', 'Aprenda a criar desenhos técnicos e projetos em 2D e 3D utilizando AutoCAD.'),
('T013', 'Curso de Análise de Dados', 'Sala M', '4 meses', 'Aprenda a analisar e interpretar dados utilizando ferramentas como Excel e SQL.'),
('T014', 'Curso de Gestão de Recursos Humanos', 'Sala N', '5 meses', 'Conheça estratégias e técnicas para gerenciar equipes de forma eficaz.'),
('T015', 'Curso de Photoshop Avançado', 'Sala O', '3 meses', 'Domine técnicas avançadas de edição de imagem utilizando o Adobe Photoshop.'),
('T016', 'Curso de E-commerce', 'Sala P', '4 meses', 'Descubra como criar e gerenciar uma loja virtual de sucesso.'),
('T017', 'Curso de SEO Avançado', 'Sala Q', '3 meses', 'Aprenda técnicas avançadas de otimização de sites para melhorar o posicionamento nos mecanismos de busca.'),
('T018', 'Curso de Gestão de Marketing', 'Sala R', '4 meses', 'Conheça estratégias e ferramentas para gerenciar a área de marketing de uma empresa.'),
('T019', 'Curso de Desenvolvimento Front-end', 'Sala S', '3 meses', 'Aprenda as tecnologias essenciais para desenvolvimento de interfaces web interativas.'),
('T020', 'Curso de Gestão Empresarial', 'Sala T', '6 meses', 'Desenvolva habilidades de liderança e gestão para administrar uma empresa com sucesso.');

-- Inserir vagas
INSERT INTO Vaga (area_vaga, nome_vaga, desc_vaga, requisitos_vaga, carga_vaga, contato_vaga, salario_vaga) VALUES
('Desenvolvimento Web', 'Desenvolvedor Front-end', 'Desenvolvimento de interfaces web utilizando HTML, CSS e JavaScript.', 'Experiência com frameworks como React ou Angular.', '40 horas semanais', 'rh@empresa.com', 'R$ 5500,00'),
('Marketing Digital', 'Analista de Mídias Sociais', 'Criação e gerenciamento de campanhas nas redes sociais.', 'Conhecimento em ferramentas de análise de métricas.', '30 horas semanais', 'contato@empresa.com', 'A combinar'),
('Design Gráfico', 'Ilustrador Digital', 'Criação de ilustrações digitais para diferentes mídias.', 'Experiência em softwares de ilustração como Adobe Illustrator.', '35 horas semanais', 'recrutamento@empresa.com', 'R$ 4500,00'),
('Desenvolvimento Web', 'Desenvolvedor Back-end', 'Desenvolvimento de lógica e integrações em aplicações web.', 'Experiência com linguagens de programação como Java ou Python.', '40 horas semanais', 'rh@empresa.com', 'R$ 6000,00'),
('Marketing Digital', 'Analista de SEO', 'Otimização de conteúdo e análise de keywords.', 'Experiência em ferramentas de SEO como SEMrush ou Moz.', '30 horas semanais', 'contato@empresa.com', 'A combinar'),
('Design Gráfico', 'Diretor de Arte', 'Criação de conceitos visuais para campanhas publicitárias.', 'Experiência em agências de publicidade e liderança de equipe.', '40 horas semanais', 'recrutamento@empresa.com', 'R$ 7000,00'),
('Desenvolvimento Web', 'Desenvolvedor Full Stack', 'Desenvolvimento de aplicações web completas, desde o front-end até o back-end.', 'Experiência abrangente em tecnologias web como HTML, CSS, JavaScript, Node.js, e bancos de dados.', '40 horas semanais', 'rh@empresa.com', 'R$ 7000,00'),
('Marketing Digital', 'Especialista em Marketing de Conteúdo', 'Criação e gestão de conteúdo para blogs, redes sociais e outras plataformas.', 'Experiência em produção de conteúdo e conhecimento em SEO.', '30 horas semanais', 'contato@empresa.com', 'A combinar');
