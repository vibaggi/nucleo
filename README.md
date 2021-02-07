# nucleo

Núcleo é o servidor principal do projeto de automação residencial.
Voce pode configura-lo para rodar em cloud ou qualquer dispositivo que rode NodeJS.

### Arquitetura

![image](https://user-images.githubusercontent.com/2222231/107133027-0bc05e80-68c3-11eb-8c2a-60f7318596da.png)

Núcleo é o servido que sempre responde aos chamados dos sistemas periféricos, passando-lhes qualquer nova configuração ou comando recentemente recebido pelo WebApp (usuário). Assim, os sistemas periféricos precisam ter uma taxa frequente de busca. São sempre os sistemas periféricos que acessam o núcleo, não o contrário.

Como vantagem desse método temos:
* Não é necessário se preocupar com os endereços de IPs dos sistemas periféricos. Apenas do Núcleo.
* É possível ter apenas um, ou alguns de todos os sistemas. Você não precisará construir toda a rede.

O usuário poderá controlar tudo pelo [Acesso](https://github.com/vibaggi/acesso), o webapp.



### Sistema Periféricos