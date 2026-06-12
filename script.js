const playlist = [
    "bestpart.mp3",
    "getyou.mp3",
    "vemca.mp3"
];

let musicaAtual = 0;

const player = document.getElementById("musica");

player.src = playlist[musicaAtual];

player.addEventListener("ended", () => {

    musicaAtual++;

    if (musicaAtual >= playlist.length) {
        musicaAtual = 0;
    }

    player.src = playlist[musicaAtual];
    player.play();

});

function comecar(){

    document.getElementById("telaInicial").style.display = "none";

    document.getElementById("conteudo").style.display = "block";

    document.body.style.overflowY = "auto";
    player.play();
    

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function abrirAreaSecreta(){

    let senha = prompt("Use a senha");

    if(senha === "abacate30"){

        document.getElementById("segredo").innerHTML =
        "<h3>❤️ Bem-vinda à área secreta ❤️</h3>";

    }
    else{

        alert("Senha incorreta");

    }

}

let lista = document.getElementById("lista500");

let coisas = [

"o primeiro motivo que me fez querer estar com você, seu jeito.",
"Amo seu sorriso",
"Amo seus olhos",
"Amo seu cabelo cacheado",
"Amo que você é aleatoria",
"Amo sua voz",
"Amo sua risada gostosa",
"Amo como fica embaixo/lado do seu nariz quando você sorri",
"Amo seu jeito de falar",
"Amo como você as vezes se embola enquanto fala",
"Amo quando você gagueja ou erra palavra",
"Amo quando você fica manhosa pra mim te tratar igual bebe (Você é minha princesa)",
"Amo que você me escuta de verdade (Você é uma boa menina, tenho muita sorte de te ter)",
"Amo quando você fica inventando história com seu irmao, se dando bem",
"Amo quando você é carinhosa comigo",
"Amo que você é muito sensivel",
"Amo sua força (nao to dizendo isso por dizer, realmente te acho forte",
"Amo sua sinceridade",
"Amo que você é uma boa menina",
"Amo sua companhia",
"Amo quando você cuida de mim",
"Amo quando você se preocupa comigo",
"Amo seu sotaque",
"Amo suas tranças",
"Amo quando você faz tranças, tipo, pqp que menina do caralho, aprendeu sozinha fazer trança",
"Amo sua inteligencia",
"Amo como você fica bonita de qualquer jeito",
"Amo que tu se parece comigo (nao falo de aparencia)",
"Amo que você é uma menina criativa",
"Amo que você me faz rir o tempo todo",
"Amo suas manias",
"Amo sua bunda (mds que delicia, nunca quis tanto morder uma coisa)",
"Amo suas qualidades",
"Amo seus defeitos",
"Amo quando você fica feliz (Te ver feliz me deixa feliz)",
"Amo quando você da aquela risadinha de... sksk",
"Amo seus peitos (tu bagunça minha mente por uns 5 dia quando manda foto dele)",
"Amo quando você me chama de amor",
"Amo quando você me chama de bê",
"Amo quando você me chama de bebe",
"Amo quando você me chama de nenem",
"Amo quando você me chama de ru",
"Amo seu coração bom (Tb tenho medo de algum dia acontecer algo com vc, ou alguem quebra-lo, por isso te protejo o maximo que posso)",
"Amo sua bondade",
"Amo que você é uma pessoa doce",
"Amo que você me ama, e não tem medo de demonstrar (Inclusive a gente só deu certo por isso, aprendi a nao ter medo com você)",
"Amo quando você fica animada",
"Amo quando você fala de algo que gosta",
"Amo sua energia caotica",
"Amo que você não tenta ser outra pessoa",

"Amo a cor da sua pele",
"Amo seus cachos",
"Amo quando você me chama",
"Amo nossas ligações",
"Amo dormir em call com você",
"Amo jogar com você",
"Amo assistir coisas com você",
"Amo quando você me manda mensagem",
"Amo suas fotos",

"Amo sua determinação",
"Amo sua maturidade apesar da idade",
"Amo sua inocência",
"Amo acordar com o seu bom dia",
"Amo a forma que você demonstra carinho",
"Amo quando você sente saudade",
"Amo quando você sente ciúmes",
"Amo dormir com o seu boa noite",
"Amo como você me entende",
"Amo que você sempre tenta melhorar",

"Amo nossas memórias",
"Amo nossas conversas aleatórias",
"Amo seus áudios",
"Amo que você me ensinou a mandar mais audios",
"Amo quando você fala rápido",
"Amo quando você fala devagar provocando",
"Amo que você tem um charme diferente",
"Amo quando você me pede ajuda",
"Amo seu jeito de baiana doidinha kkkk",
"Amo aprender coisas com você",
"Amo ensinar coisas para você",
"Amo que você me ensinou a falar ligação kkkk",

"Amo sua empatia",
"Amo sua lealdade",
"Amo sua presença",
"Amo que sua história é parecida com a minha",
"Amo a pessoa que você é",

"Amo quando você acredita em mim",
"Amo quando você me apoia",
"Amo quando você me escuta",
"Amo quando você me aconselha",
"Amo quando você me entende sem eu explicar",
"Amo como você me acalma",
"Amo como você me inspira",
"Amo quando você conta sobre seu Estado",
"Amo como você me faz feliz todos os dias",
"Amo como você mudou minha vida completamente",

"Amo sua força para continuar",
"Amo como você conseguiu lidar com tanta coisa sozinha (Agora você não ta mais sozinha)",
"Amo como você não desistiu",
"Amo sua capacidade de recomeçar",
"Amo a mulher que você está se tornando",
"Amo a garotinha que você foi",
"Amo a menina que você é hoje",
"Amo pensar em você",

,"Amo quando você fica feliz por coisas simples",
"Amo quando você fala 'oh minha mãe'",
"Amo quando você fala ''bãe''",
"Amo quando você fala com sotaque ''mãnhEEÊ, olha arthur não sei o que''",
"Amo o jeito que você fala mamão",
"Amo o jeito que cê fala palmito kkkkkkkkkkkkkkkkkkkkkkkkk",
"Amo quando você me corrige",
"Amo quando você tenta me ensinar algo",
"Amo quando você me pede ajuda",
"Amo quando você tenta compartilhar seu pensamento, você explicando é mt bonitinho kkkkkkkkkkkkkkkkk",
"Amo seu jeito de demonstrar",
"Amo quando você me manda imagem aleatoria",
"Amo quando você me manda vídeo no tik tok",
"Amo quando você me manda reels",
"Amo quando você lembra de mim",
"Amo quando você fala do seus sonhos",
"Amo quando você pensa no seu futuro",
"Amo que você é uma boa menina",
"Amo quando você fala do nosso futuro",
"Amo quando você confia em mim",
"Amo quando você me escolhe",
"Amo quando você me inclui nas suas coisas",
"Amo quando você me conta novidade",
"Amo quando você me conta fofoca (Antes eu não abria espaço pra fofoca, outra coisa que aprendi com vc kkkkkk)",

"Amo nossas madrugada conversando, quando dá",
"Amo nossas ligação demorada",
"Amo as ligações curta tambem",
"Amo quando você liga e diz que queria ouvir minha voz",
"Amo quando dormimos juntos em ligação",
"Amo quando vc da em cima de mim",
"Amo quando assistimos algo junto",
"Amo nossos momento no Rave",
"Amo quando você me defende",
"Amo as manias que pegamos, tipo ficar soprando no rave kkkkkkkk",
"Amo quando você escolhe algo bom para assistirmos",
"Amo quando você comenta junto comigo tudo durante o filme/serie",
"Amo quando você se emociona assistindo algo",
"Amo quando você fica curiosa",

"Amo jogar Minecraft com você",
"Amo quando você se perde no Minecraft",
"Amo quando você encontra animais no Minecraft e tem aquela reação super feliz, eu fico completamente apaixonado por você",
"Amo quando você fica fissurada em algo no jogo, tipo gato, arco, papagaio, tu é toda aleatoria",
"Amo que você é uma menina atentada kkkkkkkkkkkkkkkk (Lembrei de tu com o arco skjdsd, demonia)",
"Amo quando você me pede pra fazer as coisas pra você no minecraft",
"Amo quando ficamos presos em algum lugar do mapa",
"Amo construir coisas com você",
"Amo entrar em caverna com você",

"Amo quando você me faz rir sem querer",
"Amo que você me aceita do jeito que eu sou",
"Amo que você se importa com meus sentimentos",
"Amo quando você fala algo absurdo",
"Amo quando você inventa palavra",
"Amo quando você fala errado alguma coisa",
"Amo quando você fica emburrada",
"Amo quando você faz bico",
"Amo quando você fica competitiva (Tu é competitiva pra caramba)",
"Amo quando você perde no dominó e faz bico",
"Amo quando você ganha e se acha",
"Amo quando você me provoca",

"Amo quando você diz ''quem é a criativa, eu...''",
"Amo sua resistência",
"Amo sua determinação diária",
"Amo sua persistência",
"Amo sua evolução",
"Amo o jeito que você se esforça pra estar comigo",

"Amo quando você cuida dos animais",
"Amo quando você demonstra carinho",
"Amo que você se esforça pra darmos certos",
"Amo que você me lembra o amarelo",
"Amo que você apoia meus sonhos",
"Amo sua humildade",

"Amo quando você fica animada com algo novo",
"Amo quando você descobre algo interessante, e tem aquela reação gostosa de ver",
"Amo quando você aprende algo novo",
"Amo sua curiosidade",
"Amo sua vontade de crescer",
"Amo sua capacidade de adaptação",
"Amo seu jeito espontâneo",
"Amo sua naturalidade",
"Amo que se algum dia eu precisar, sei que você vai estar do meu lado pra me ajudar",


"Amo o jeito que você escreve",
"Amo seus erros engraçados",
"Amo quando você responde rápido",

"Amo sua existência",
"Amo sua presença na minha vida",
"Amo sua companhia todos os dias",
"Amo planejar a vida com você",
"Amo sonhar com você",
"Amo nosso vínculo",

"Amo quando te peço algo, e você faz",
"Amo quando você fica acordada comigo",
"Amo quando você tenta me animar",
"Amo quando você se preocupa comigo",
"Amo quando você me pergunta se to bem",
"Amo quando você cuida de mim",
"Amo quando você deixa eu cuidar de você",
"Amo quando você demonstra confiança",
"Amo quando você compartilha seus medos",
"Amo quando compartilha suas conquistas, mesmo se for uma coisa pequena, eu sempre vou vibrar com você",

"Amo que a gente ta junto hoje em dia, e vai estar no futuro tambem",

"Amo suas opiniões",
"Amo suas reflexões",
"Amo suas ideias",
"Amo sua simplicidade",
"Amo quando você orou por mim",
"Amo sua imaginação",
"Amo quando você fica rindo com arthur inventando historia, toda bobona",
"Amo sua forma de enxergar o mundo",


"Amo quando você faz perguntas",
"Amo quando você quer aprender",
"Amo quando você demonstra um lado mais fragil seu",
"Amo quando você entra em um assunto atras do outro, de forma aleatória",
"Amo quando você se empolga explicando algo",

"Amo nossos momentos engraçados",
"Amo quando você fica toda bobona",


"Amo seu caráter",
"Amo seus princípios",

"Amo quando você fica feliz por minha causa",
"Amo quando você comemora comigo algo que fiz",
"Amo quando você acredita em mim",
"Amo quando você me incentiva",
"Amo quando você me motiva",
"Amo quando você me apoia",
"Amo quando você me dá forças",
"Amo quando você me entende",
"Amo quando você me escuta",
"Amo quando você me faz querer tentar ser melhor",
"Amo o jeito que voce fala do são joão (desculpa te lembrar, mas vou passar com vc, se vc quiser, vai passar em branco nao, tu vai ver)",

"Amo sua capacidade de perdoar",
"Amo sua altura",
"Amo sua testa",
"Queria poder falar que amo a testa debaixo aqui tambem, mas essa você ainda nao mostrou)",
"Amo quando você fala sacanagem comigo",

"Amo quando você fala da sua infância, até a parte ruim, apesar de tudo que aconteceu, você pode falar comigo sobre",
"Amo suas histórias antigas",
"Amo quando você fica me contando historia",
"Amo que você ja me pôs até pra dormir kkkkkkkkkkkkkkkkkkkkkkkkkkk",
"Amo poder confiar em você",
"Amo sua capacidade de seguir em frente",
"Amo sua força",
"Amo cada momento especial que passei com você",


"Amo quando você compartilha alguma coisa do seu dia",
"Amo quando você fala das suas preocupações",


"Amo o jeito que você fala ''banana'''",
"Amo quando você fala algo sem sentido",
"Amo quando você fica confusa",
"Amo quando você tenta explicar alguma coisa",
"Amo quando você fica tímida",
"Amo quando você fica envergonhada",


"Amo suas reações",
"Amo quando você me dedica musica",
"Amo quando você vê algum e diz ''eu e você''",
"Amo que você é toda menininha kkk, gosta de barbie, hello kitty",
"Amo quando você fica fazendo graça kkkkkkkkkkkkk eu te acho mt engraçada cabeçuda",
"Amo quando você manda foto do olho",
"Amo que você dá risada de coisa besta que eu faço",
"Amo quando você manda foto do cabelo",
"Amo quando você me da bronca por rir de alguma coisa sua kjkkkkjjkk",
"Amo quando você fica indignada",
"Amo quando você faz drama",
"Amo quando você faz manhã pra mim te mimar",
"Amo quando você faz birra",

"Amo jogar o joguinho de futebol com voce",
"Amo brincar com você",
"Amo te sacanear no minecraft e te ver brava KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
"Amo quando você elogia algo legal que construi",
"Amo quando você me elogia por ir bem em prova",
"Amo quando você elogia meu sorriso",
"Amo quando você elogia minha boca",
"Amo quando você elogia meu olho",
"Amo quando você elogia meu biceps",
"Amo quando você manda aquelas figurinhas de tarada KSAKDKSKJD",
"Amo a maioria das figurinhas que tu usa",
"Amo quando falo alguma curiosidade ou algo assim, e você me chama de inteligente",
"Amo quando você vira uma criança comigo kkkkkkkkkkk que nem quando você tava me atirando com o arco, ou ontem que li pra você",

"Amo que com você eu me sinto a vontade pra ser eu mesmo",
"Amo ver filme com você",
"Amo você dançando",
"Amo sua bunda (ja disse mas tinha que por dnv essa skjdskjdkjsd)",
"Amo sua pintinha descendo pra bunda",
"Amo sua pintinha no braço",
"Amo a maçã do seu rosto, é muito bonita",
"Amo a palpebra do seu olho",
"Amo sua companhia mais do que o filme quando a gente ta assistindo",

"Amo sua boca",
"Amo que você gosta de animais",
"Amo sua sobrancelha",
"Amo que você não tem medo nenhum de mudança, afina sobrancelha, pinta cabelo, põe cilios, eu te admiro be",
"Amo quando você ta com sono",
"Amo quando você manda figurinha de cachorro, a maioria parece você kkkkkkkkkkkkk",

"Amo quando você me fazia ir com você atras de gato kkkkkkkkkkkkkkkkkkkkkk você voltava cheia de corda e gato, parecia aqueles cara em feira carregando balão",
"Amo quando você mata algum bicho sem querer e fica toda sentida kkkkkkk",
"Amo parada boba que fizemo no jogo, tipo o caça ovo na hello kitty",
"Amo seu coração mole, não me deixou matar a hello kitty",
"Amo que tu tinha conseguido um cavalo de osso, e quando viu que eu gostei dele, deixou eu ficar",

"Amo quando você me conta sobre aquilo que aconteceu (por vc ta se abrindo)",
"Amo quando você demonstra um lado mais fragil seu, me faz querer cuidar mais de você",
"Amo quando você é medrosa",
"Amo nossa conexão",
"Amo quando você diz que vai casar comigo, você é a mulher da minha vida",
"Amo a dualidade do seu jeito, você é toda princesa nenem, mas tambem é safada",
"Amo quando você diz ''ai que odio'' rindo, por causa de alguma gracinha minha",

"Amo seu cabelo natural",
"Amo a cor natural dele",
"Amo quando você muda a cor do cabelo",
"Amo quando você faz tranças",
"Amo que tu consegue trançar seu proprio cabelo",
"Amo que você é toda gracista",
"Amo como você fica bonita pra caralho de cabelo preso",
"Amo como você fica bonita de cabelo solto",
"Amo como você fica bonita de qualquer jeito",
"Amo que você é muito vaidosa",
"Amo aquilo que você faz na boca",
"Amo demais sua boca natural",
"Amo o cantinho da sua boca quando você sorri",
"Amo quando você me manda foto",

"Amo seu sorriso",
"Amo seus dentinhos",
"Amo seu nariz",
"Amo o jeito que seu nariz fica quando você ri",
"Amo suas expressões faciais",
"Amo a parte de cima da sua boca quando você sorri",
"Amo quando você tenta parecer séria",
"Amo sua voz quando ta brava",
"Amo quando você ri junto comigo",
"Amo escutar musica com você",
"Amo seu gosto musical",
"Amo quando falo pra vc me chamar com jeitinho e vc me chama de ru lindo gostoso",

"Amo que você entende coisa que rolou comigo por ter passado por coisa parecida",
"Amo que consigo te contar qualquer coisa, eu nunca tive isso antes",
"Amo sua capacidade de confiar nas pessoas (e tb tenho medo dela)",
"Amo sua capacidade de crescer",

"Amo sua coxa, delicia, to passando vontade",
"Amo sua barriga",
"Amo sua cintura",
"Amo seu umbigo",
"Amo o bico do seu peito, pqp que tesão da desgraça bateu agora KSKDSK",
"Amo quando você sente minha falta, inclusive enquanto digito isso tu ta sentindo, ta ligando, xo ir te atender",
"Amo quando você me procura",
"Amo quando você me escolhe",
"Amo quando você ta com sono e começa falar nada com nada",
"Amo quando voce ta com sono, apaga, e do nada volta falando que teve algum sonho maluco em segundos kkkkkkkkkkkkkkkkkkkkkkkkkk",

"Amo falar nada com nada você",
"Amo ter conversa profunda com você",
"Amo os brincos que você usa",
"Amo ficar te zoando com filtro",
"Amo quando você me ensina alguma coisa",
"Amo quando você fala dormindo",
"Amo quando você geme dormindo (PQP eu fico imaginando na hora do.... seu gemido é gostoso demais)",
"Amo quando você ta com vontade",
"Amo como você consegue me deixar com vontade",
"Amo nossas brincadeira com duplo sentido",
"Amo seu pescoço",
"Amo sua pele no sol",
"Amo as cara e boca que você faz nas foto",
"Amo o jeito que você poe a lingua dentro da boca pra tirar foto",
"Amo seu humor",
"Amo sua voz quando ta gripada",
"Amo quando você me manda foto debaixo do chuveiro",
"Amo coisas que ainda nem vivemos, que nem tu velha kkkkkkk fiquei pilhado em tu com filtro de velha",
"Amo tu de calcinha",
"Amo que tu parece aqueles dog pequeno fofo kkkkkkkkkkkkkkk",
"Amo quando você começa a cantarolar",
"Amo quando te peço pra cantar pra mim, e você canta",
"Amo aquela foto do seu olho criança",
"Amo quando você me manda foto desarrumada",
"Amo quando você me manda foto doentinha",
"Amo quando você coloca isa pra falar comigo",
"Amo quando você diz que me ama do nada",
"Amo que você pegou meu jeito de falar, e minhas gracinha, e eu peguei seu jeito e suas gracinhas",
"Amo quando você me manda foto e não posta (tb gosto quando manda, mas avisa que vai postar)",
"Amo quando você demonstra se sentir segura comigo",
"Amo quando você me procura",
"Amo o brilho do seu cabelo",
"Amo quando você fala com orgulho da sua irmã",
"Amo quando você faz algum penteado legal, tipo aquele com aquilo amarelo",
"Amo quando você demonstra ciumes",
"Amo quando você fica bobona comigo do nada",
"Amo as marcações que ficam no seu rosto quando você sorri",
"Amo os pontinhos branco que te falei aquela vez que você tem",
"Amo assistir the walking dead com você",
"Amo assistir prison break com você tambem",
"Amo quando passamos um tempao um junto sem enjoar",
"Amo quando a gente ta cada um fazendo uma coisa, mas ta ligação",

"Amo quando tava jogando no pc, e vc tava comigo ligação",
"Amo o brilho da sua pele",
"Amo quando a gente via Floribella",
"Amo quando você me pede pra ler pra você",
"Amo quando você deixa escapar risada sem querer",
"Amo que você é toda arretada, mas tb é toda bobona",
"Amo sua orelha",
"Amo seus cilios que você fala que é pequeno",
"Amo sua inocencia",

"Amo sua voz cansada",
"Amo quando você me chama de namorado na frente da sua familia",
"Amo quando você conversa comigo na frente deles",
"Amo quando você me coloca pra conversar com eles",
"Amo seu jeitinho manhosa",
"Amo quando você diz o que te incomoda",
"Amo quando voce manda foto da sofia",
"Amo que voce ama seus irmãos e sua mãe",

"Amo que sua existencia é completamente exagerada em tudo, tudo que você vai sentir, você sente demais, tudo que vai expressar, se expressa demais, sua vida é bonita, você como ser humano é bonita",
"Eu te amo",


];

for(let i = 0; i < coisas.length; i++){

    let item = document.createElement("p");

    item.innerText = (i + 1) + " - " + coisas[i];

    lista.appendChild(item);

}

function atualizarContador(){

    let inicio = new Date("2026-02-02T12:00:00");

    let agora = new Date();

    let diferenca = agora - inicio;

    let dias = Math.floor(diferenca / (1000*60*60*24));

    let horas = Math.floor(
        diferenca/(1000*60*60)%24
    );

    let minutos = Math.floor(
        diferenca/(1000*60)%60
    );

    let segundos = Math.floor(
        diferenca/1000%60
    );

    document.getElementById("contador").innerHTML =
    dias + " dias<br>" +
    horas + " horas<br>" +
    minutos + " minutos<br>" +
    segundos + " segundos";

}

setInterval(atualizarContador,1000);
atualizarContador();