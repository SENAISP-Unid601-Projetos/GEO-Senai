package br.com.example.geo_senai.resource;

import br.com.example.geo_senai.entity.Sala;
import br.com.example.geo_senai.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/salas")
public class SalaResource {
    @Autowired
    private SalaRepository salaRepository;

    private static final String UPLOAD_DIR = "C:/GEO-Senai/Back-end/src/main/java/br/com/example/geo_senai/upload/";

    int n = 0;

    @PostMapping("/upload/{nome}")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file, @PathVariable String nome) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Selecione um arquivo para fazer upload!");
        }

        try {
            byte[] bytes = file.getBytes();
            String imageName = n++ + ".png"; // Nome da imagem a ser salva
            Path path = Paths.get(UPLOAD_DIR + imageName);
            Files.write(path, bytes);

            // Consulta a sala pelo nome
            Optional<Sala> salaOptional = salaRepository.findByNomeSala(nome);

            if (salaOptional.isPresent()) {
                Sala sala = salaOptional.get();

                // Atualiza a URL da imagem da sala
                sala.setUrl_imagem(imageName);

                // Salva a sala atualizada no banco de dados
                salaRepository.save(sala);
            } else {
                // Sala não encontrada. Trate o erro conforme necessário.
                // Exemplo: retorne um erro 404
            }

            return ResponseEntity.ok().body("Imagem enviada com sucesso!");
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Erro ao fazer upload da imagem: " + e.getMessage());
        }
    }

    @GetMapping("/images/{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable String imageName) {
        try {
            Path imagePath = Paths.get(UPLOAD_DIR + imageName);
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG) // Definir o tipo de mídia como imagem PNG
                    .body(imageBytes);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public List<Sala> getSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("/area1-inferior")
    public List<Sala> getSalasArea1Inferior() {
        return salaRepository.findByPosicaoSala("Área 1 (inferior)");
    }

    @GetMapping("/area1-superior")
    public List<Sala> getSalasArea1Superior() {
        return salaRepository.findByPosicaoSala("Área 1 (superior)");
    }

    @GetMapping("/area2")
    public List<Sala> getSalasArea2() {
        return salaRepository.findByPosicaoSala("Área 2");
    }

    @PostMapping()
    public Sala adicionaSala(@RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("/editar/{id}")
        public Sala editarSala(@PathVariable Long id, @RequestBody Sala sala) {
        sala.setId_sala(id);
        return salaRepository.save(sala);
    }
}
