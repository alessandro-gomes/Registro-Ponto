package br.com.aporttsistemas.exerciciotecnico.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name="REGISTRO_PONTO")
public class RegistroPonto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
    private LocalDateTime dataEHora;
    
    private String latitude;
    
    private String longitude;
    
    private String ipMaquina;
    
    private String caminhoImagemSalva;

    public RegistroPonto() {
        
    }

    public RegistroPonto(LocalDateTime dataEHora, String latitude, String longitude, String ipMaquina, String caminhoImagemSalva) {
        this.dataEHora = dataEHora;
        this.latitude = latitude;
        this.longitude = longitude;
        this.ipMaquina = ipMaquina;
        this.caminhoImagemSalva = caminhoImagemSalva;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDataEHora() {
        return dataEHora;
    }

    public void setDataEHora(LocalDateTime dataEHora) {
        this.dataEHora = dataEHora;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getIpMaquina() {
        return ipMaquina;
    }

    public void setIpMaquina(String ipMaquina) {
        this.ipMaquina = ipMaquina;
    }

    public String getCaminhoImagemSalva() {
        return caminhoImagemSalva;
    }

    public void setCaminhoImagemSalva(String caminhoImagemSalva) {
        this.caminhoImagemSalva = caminhoImagemSalva;
    }
    
    
}

