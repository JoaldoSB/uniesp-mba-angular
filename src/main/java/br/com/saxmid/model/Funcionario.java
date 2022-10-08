package br.com.saxmid.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_funcionario")
public class Funcionario implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "funcionario_id")
    private Integer id;
    private String name;
    private String email;
    private String obs;
    private boolean ativo;

}
