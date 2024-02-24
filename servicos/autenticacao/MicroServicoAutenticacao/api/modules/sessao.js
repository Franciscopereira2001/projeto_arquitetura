class Sessao {
    constructor(seassonId, token, userId, beginDate, expirationDate, ipAddress) {
        this.id = seassonId;
        this.token = token;
        this.usuario = userId;
        this.dataInicio = beginDate;
        this.dataExpiracao = expirationDate;
        this.enderecoIP = ipAddress;
    }
}