-- :)

-- EXEMPLOS DE INSERT --

-- Inserir turmas
INSERT INTO Turma (codigo_turma, nome_curso, sala_turma, duracao_curso, desc_curso) VALUES
('3TDS', 'Técnico em Desenvolvimento de Sistemas, Tarde', 'Lab Informática 4 - Sala L322', '3 semestres', 'Este curso aborda o desenvolvimento de sistemas web, aplicativos e dispositivos móveis.'),
('3MDS', 'Técnico em Desenvolvimento de Sistemas, Manhã', 'Lab Informática 4 - Sala L322', '3 semestres', 'Este curso aborda o desenvolvimento de sistemas web, aplicativos e dispositivos móveis.'),
('3TADM', 'Técnico em Administração, Tarde', 'Lab Informática 3 - Sala L329 - Sala L328', '3 semestres', 'Este curso aborda os assuntos envolvendo administração e gestão.'),
('3MADM', 'Técnico em Administração, Manhã', 'Lab Informática 3 - Sala L329 - Sala L328', '3 semestres', 'Este curso aborda os assuntos envolvendo administração e gestão.'),
('2IELE_A', 'Eletroeletrônica, Tarde', 'Sala L332', '3 semestres', 'Este curso aborda os assuntos envolvendo eletroeletrônica.'),
('1IMACB', 'Mecatrônica', 'Sala L334', '3 semestres', 'Este curso aborda os assuntos envolvendo mecatrônica.'),
('1IMACA', 'Mecatrônica', 'Sala L334', '3 semestres', 'Este curso aborda os assuntos envolvendo mecatrônica.'),
('2IMAC', 'Mecatrônica', 'Sala L137', '3 semestres', 'Este curso aborda os assuntos envolvendo mecatrônica.'),																																
('1TADM_VW', 'Administração', 'Sala L129', '3 semestres', 'Este curso aborda os assuntos envolvendo administração e gestão'),
('T1ALP', 'Auxiliar de Linha de Produção', 'Sala S308', '1 semestre', 'Este curso aborda os assuntos envolvendo linha de produção.');

-- Inserir vagas																																																																																																						
INSERT INTO Vaga (area_vaga, nome_vaga, desc_vaga, requisitos_vaga, carga_vaga, contato_vaga, salario_vaga) VALUES
('Estágio em P&D - NGC', 'Desenvolvedor(a)/Estágio em P&D - NGC', 'Atuar no desenvolvimento de malhas de controle, algoritimos de guiamento e sistemas de navegação etc.', 'Formação: Cursando Ensino superior em Engenharia Mecatronica, aeronautica da computação, eletrica e eletronica ou cursos correlatos.', '', 'carreira@xmobots.com.br', '');

-- Inserir salas
INSERT INTO Sala (nome_sala, posicao_sala) VALUES
('L129', 'Área 1 (inferior)'),
('L137', 'Área 1 (superior)'),
('L216', 'Área 1 (superior)'),
('L315', 'Área 1 (superior)'),
('L320 - Informática 2', 'Área 1 (superior)'),
('L321 - Informática 3', 'Área 1 (superior)'),
('L322 - Informática 4', 'Área 1 (superior)'),
('L323', 'Área 1 (superior)'),
('L329', 'Área 1 (superior)'),
('L307', 'Área 1 (superior)'),
('L331', 'Área 1 (superior)'),
('L332', 'Área 1 (superior)'),
('L334', 'Área 1 (superior)');

-- Inserir usuário
INSERT INTO administrador (usuario_admin, senha_admin) VALUES ("login", "senha");

