-- :)

-- EXEMPLOS DE INSERT --

-- Inserir turmas
INSERT INTO Turma (codigo_turma, nome_curso, sala_turma, duracao_curso, desc_curso) VALUES
('T001', 'Curso de Programação Web', 'Sala A', '3 meses', 'Este curso aborda os fundamentos do desenvolvimento web.');


-- Inserir vagas
INSERT INTO Vaga (area_vaga, nome_vaga, desc_vaga, requisitos_vaga, carga_vaga, contato_vaga, salario_vaga) VALUES
('Desenvolvimento Web', 'Desenvolvedor Front-end', 'Desenvolvimento de interfaces web utilizando HTML, CSS e JavaScript.', 'Experiência com frameworks como React ou Angular.', '40 horas semanais', 'rh@empresa.com', 'R$ 5500,00');

-- Inserir salas
INSERT INTO Sala (nome_sala, posicao_sala) VALUES
('L322 - Informática 4', 'Área 1 (superior)'),
('Sala de mecatrônica', 'Área 1 (inferior)'),
('Sala de empilhadeira', 'Área 2');
