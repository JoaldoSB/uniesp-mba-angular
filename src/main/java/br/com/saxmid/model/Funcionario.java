package br.com.saxmid.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
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

    @CPF
    @Column(length = 11, unique = true)
    private String cpf;

    @Email
    private String email;

    private String obs;

    private boolean ativo;

}
