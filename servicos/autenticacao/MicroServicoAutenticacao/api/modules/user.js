class User {
    constructor(userId, createdDate, lastUpdateDate, email, userName, password, perfil, status) {
        this.id = userId;
        this.dataCriacao = createdDate;
        this.dataUltimaAtualizacao = lastUpdateDate;
        this.email = email;
        this.nomeUtilizador = userName;
        this.palavraPasse = password;
        this.perfil = perfil;
        this.status = status;
    }
}

module.exports = User;

