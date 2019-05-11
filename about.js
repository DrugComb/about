
var tnum = 'en';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  

  /*TRANSLATE*/
 // translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    
	
switch (lang) {
  case 'fa':
		   window.location.href = "https://drugcomb.fimm.fi/about/FA/";
    break;
  case 'fr':
		   window.location.href = "https://drugcomb.fimm.fi/about/FR/";
    break;
	
	 case 'en':
		   window.location.href = "https://drugcomb.fimm.fi/about/";
    break;
	 case 'it':
		   window.location.href = "https://drugcomb.fimm.fi/about/IT/";
    break;
	case 'ru':
		   window.location.href = "https://drugcomb.fimm.fi/about/RU/";
    break;
    case 'ch':
		   window.location.href = "https://drugcomb.fimm.fi/about/中文/";
    break;
}


/*
    if(lang == 'fa'){
		console.log("sdsdsdsd");
		
		   window.location.href = "https://drugcomb.fimm.fi/about/FA/";

		
      //$('body').attr('dir', 'rtl');
	  $('.p1').attr('dir', 'rtl');
	  $('.p2').attr('dir', 'rtl');
	  $('.p3').attr('dir', 'rtl');
	  $('.p4').attr('dir', 'rtl');
	  $('.p5').attr('dir', 'rtl');
	  $('.p6').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
	  $('.p1').attr('dir', 'ltr');
	  $('.p2').attr('dir', 'ltr');
	  $('.p3').attr('dir', 'ltr');
	  $('.p4').attr('dir', 'ltr');
	  $('.p5').attr('dir', 'ltr');
	  $('.p6').attr('dir', 'ltr');
    }
    */
	
	
  });
});

function translate(tnum){
  $('.p1').text(trans[0][tnum]);
  $('.p2').text(trans[1][tnum]);
  $('.p3').text(trans[2][tnum]);
  $('.p4').text(trans[3][tnum]);
  $('.p5').text(trans[4][tnum]);
  $('.p6').text(trans[5][tnum]);

 
  
 // $('p1').text(trans[1][tnum]);
 // $('.content a span').text(trans[2][tnum]);
}

var trans = [ 


  { 
    en : 'DrugComb is an open-access, community-driven data portal where the '+
	'results of drug combination screening '+
	'studies for a large variety of cancer cell lines are accumulated, standardized and harmonized. An actively expanding array of data '+
	'visualization and computational tools is provided for the analysis of drug combination data. All the data and informatics tools are '+
	'made freely available to a wider community'+
	'of cancer researchers. 	',
	
    fa : 'DrugComb  یک درگاه اینترنتی عمومی و رایگان است که نتایج مطالعات کاوش ترکیب چند دارویی در رده های متنوع سلول های سرطان در آن جمع آوری، استاندا'+
	'ردسازی و هماهنگ شده اند (http://drugcomb.fimm.fi). در این درگاه اینترنتی، چندین ابزار محاسباتی به همراه آرایه ای از تصویرسازی داده ها برای تحلیل داد'+
	'ه های داروهای ترکیبی فراهم شده است. تمامی داده ها و ابزارهای انفورماتیکی به صورت رایگان در دسترس تمامی محققین سرطان قرار دارد.',
	
	

	fr: 'DrugComb est un portail de données en libre accès, où les résultats des études de dépistage de'+
	'combinaisons de médicaments pour une grande variété de lignées de cellules cancéreuses sont accumulés, normalisés et harmonisés.'+ 
	'Une large sélection d\'outils de visualisation et de calcul en expansion continue est fournie aux utilisateurs pour l\'analyse des'+
	'données de combinaison de médicaments. Toutes les données et tous les outils informatiques sont rendus gratuitement accessible à une'+ 
	'vaste communauté de chercheurs sur le cancer.' ,
	
	it: 'DrugComb è un portale di dati ad accesso aperto che raccoglie i risultati di screening di combinazioni di farmaci tumorali. La base '+
	'dati è composta da un\'ampia varietà di linee cellulari tumorali ed i cui dati sono stati standardizzati ed armonizzati tra loro. È inoltre'+
	'disponibile una ricca collezione, in continua espansione, di strumenti computazionali per la visualizzazione e l\'analisi dei dati. Tutti i '+
	'dati e gli strumenti informatici sono resi disponibili in modo libero e gratuito a beneficio dell\'intera comunità di ricercatori oncologici.'


  },
  
  
  /////////////////////////////////////////////////////////////////////////////////////////
  { 


en:'Background',

fa:'مقدمه',


it:'Motivazioni',
fr:'Contexte '

  },
  
  
  
  //2/////////////////////////////////////////////////////////////////////////////////////////////////
  { 
  
en:'Making cancer treatment more personalized and effective is one of the grand challenges in our health care system.'+
   'However, many drugs have entered clinics but so far showed limited efficacy, and we have limited understanding on why certain'+
   'patients are non-responding. Even when there is an initial treatment response, cancer cells with high mutational potential and'+
   'functional redundancy can easily develop drug resistance by activation of compensating pathways. To reach effective and sustained'+
  'clinical responses, we critically need multi-targeted drug combinations, which shall selectively inhibit the cancer cells and block'+
   'the emergence of drug resistance.The Individualized Systems Medicine (ISM) platform at FIMM aims to identify novel therapeutic options that are '+
   'most likely to be translated into clinics.'+
'Cancer patient samples are collected from clinics and cultured for drug sensitivity testing and molecular profiling. Since exhaustive experimentation'+
'of all the possible drug combinations for each specific cancer type or patient is not possible, computational methods offer the improved efficiency to '+
'predict the most potential drug combinations.',
	
	
	

fa : ' یکی از چالش های اساسی در سامانه بهداشتی-درمانی، درمان کارآمد و اختصاصی مبتلایان به سرطان'+
 'است. اگرچه داروهای زیادی برای این منظور در درمان استفاده می شوند، اما این داروها کارآمدی  '+
'پایینی داشته و هنوز نمی دانیم که چرا بسیاری از بیماران با استفاده از این داروها درمان نمی شوند. حتی در مواقعی که یک پاسخ درمانی اولیه از یک دارو مشاهده می کنیم، به علت توانایی بالای جهش-زایی '+
'و فعالیت بالای سلول های سرطانی، این سلول ها با فعال کردن مسیرهای جبرانی نسبت به داور '+
'مقاومت نشان می دهند. برای دستیابی به پاسخ های درمانی پایدار و کارآمد، ما به استفاده از رویکرد '+
'ترکیب داروها با اهداف چندگانه نیازمندیم تا سلول های سرطانی را به صورت انتخابی مهار کرده و '+
' از بروز مقاومت دارویی جلوگیری نماییم .'+
'یکی از اهداف پلتفرم پزشکی سامانه گرای فردی (ISM) در موسسه FIMM، تعیین گزینه های درمانی '+
'جدید است که بتوان به راحتی در  رمانگاه از آنها استفاده نمود. نمونه¬های بیماران سرطانی در درمانگاه '+
'جمع آوری شده و برای بررسی حساسیت دارویی و پروفایل مولکولی، کشت داده می شوند. از آنجایی '+
'که آزمایش جامع تمامی ترکیب های چند دارویی ممکن برای هر گونه سرطان یا هر بیمار امکان پذیر '+
'نیست، روش های محاسباتی برای پیش بینی ترکیب های چند داوریی بالقوه با کارآمدی بالا پیشنهاد'+
 'می گردد.' ,

	
fr: 'Rendre le traitement du cancer plus personnalisé et plus efficace constitue l’un des plus grands défis de notre système de santé. '+
'Actuellement, de nombreux médicaments en usage clinique font preuve d’une efficacité très limitée auprès de certains groupes de patients,'+
 'et cela pour des raisons toujours inconnues. Même en cas de réponse initiale au traitement, les cellules cancéreuses à potentiel mutationnel'+
 'élevé et à redondance fonctionnelle peuvent facilement développer une pharmacorésistance par le biais d\'une activation de multiples mécanismes'+
 'de compensation. Par conséquent, la réalisation de réponses cliniques durables et efficaces nécessite des combinaisons de médicaments à cibles'+
 'multiples, capables d’inhiber sélectivement les cellules cancéreuses et de bloquer ainsi l’émergence d’une résistance aux médicaments. La plateforme'+
 '‘Individualized Systems Medicine’ (ISM) [en français : la médecine des systèmes individualisés] à FIMM songe à identifier de nouvelles possibilités '+
 'thérapeutiques susceptibles d\'être traduits en usage clinique. Pour ce faire, des spécimens de patients atteints de cancer sont d’abord prélevés dans'+
 'des cliniques et puis cultivés au laboratoire pour des tests de sensibilité aux médicaments et pour l\'établissement de leurs profils moléculaires. '+
 'Puisqu’il est impossible de tester de manière exhaustive toutes les combinaisons de médicaments pour chaque type de cancer ou pour chaque patient,' +
 'la mise en œuvre de méthodes informatiques offre une efficacité accrue pour prévoir les combinaisons de médicaments les plus performantes.',

 it:'Rendere il trattamento del cancro più personalizzato ed efficace è una delle grandi sfide del nostro sistema sanitario. Tuttavia, '+
 'molti farmaci che sono attualmente utilizzati in campo clinico hanno mostrato solamente una efficacia limitata ed il motivo per cui alcuni'+
' pazienti non rispondono positivamente al trattamento è ancora ignoto. Anche quando esiste un miglioramento delle condizioni come '+
 'risposta al trattamento, le cellule tumorali con un alto tasso di mutazione e ridondanza funzionale possono facilmente sviluppare una '+
 'resistenza ai farmaci mediante l\'attivazione di percorsi compensatori. Per raggiungere delle terapie benefiche e durature nel tempo '+
 'abbiamo perciò bisogno di combinazioni di farmaci a diversa tipologia di azione, con l\'obiettivo di inibire selettivamente le cellule '+
 'tumorali e bloccare l\'emergere della resistenza ai farmaci. La piattaforma Sistemi di Medicina Individualizzata (ISM) di FIMM mira ad '+
 'individuare nuove strategie terapeutiche con la più alta probabilità di successo in ambito clinico. I campioni cellulari di pazienti '+
 'affetti da cancro sono raccolti in cliniche specializzate e successivamente coltivate per test di sensibilità a farmaci ed anche '+
 'profilazione molecolare. Poiché la sperimentazione esaustiva di tutte le possibili combinazioni di farmaci per ogni specifico tipo' +
' di paziente non è possibile, i metodi computazionali offrono un efficace alternativa per predire le migliori potenziali combinazioni.'
 
 
 
 
  },
  
  
  
  
  
  /////////////////////////////////////////////////////////////
  
  {
	  
	en:'Research Strategy'  ,
	  
	 fr:'Stratégie de Recherche',
	  
	  
	  fa:'راهبرد پژوهشی',
	  
	  it:'Strategia di ricerca'
	  
  },
  
  ///////////////////////////////////////////
  
  {
	  en:'To facilitate the rational design of drug combinations toward a future of truly personalized cancer medicine,'+
       'we will develop model-based clustering methods for the identification of patient subgroups that require specific treatment'+
        '(“the right drug to the right patient”). For patients resistant to chemotherapy, we will develop network modelling approaches'+
        'to predict the most potential drug combinations. The drug combination prediction will be made for each patient and will be'+
        'validated using a preclinical drug testing platform on patient samples. We will explore the drug combination screen data to'+
        'identify significant synergy at the therapeutically relevant doses. The drug combination hits will be modelled in cancer signaling'+
        'networks to infer their mechanisms of action. Drug combinations with selective efficacy in individual patient samples or sample'+
        'subgroups will be further translated into in treatment options. The proposed drug combination prediction, modelling and testing'+
        'pipeline has the potential to lead to novel,'+
        'more effective and safe treatments compared to the current cytotoxic and monotherapies.',
	  
	  
	  
	  fr:'Afin de faciliter la conception rationnelle de combinaisons de médicaments permettant d’atteindre une médecine anticancéreuse '+
	  'réellement personnalisée, nous développerons des méthodes de classification pour l\'identification de sous-groupes de patients '+
	  'nécessitant des traitement particuliers (« le bon médicament pour le bon patient »). Pour les patients résistant à la chimiothérapie,' +
	  'nous mettrons en place des approches de modélisation de réseaux d’interactions biologiques dans le but de prédire les combinaisons '+
	  'de médicaments qui seront les plus performantes. La prédiction des combinaisons de médicaments se fera pour chacun des patients, '+
	  'et sera validée à l\'aide d\'une plateforme qui évaluera ex vivo l’activité de ces combinaisons sur des échantillons prélevés des patients.'+
	  'Ensuite, nous explorerons les résultats de l’activité de ces combinaisons pour identifier d’éventuelles synergies significatives pour des '+
	  'doses thérapeutiques. Les meilleures combinaisons de médicaments testées seront aussi modélisées dans des réseaux de signalisation du cancer '+
	  'pour en déduire leurs mécanismes d\'action. Ainsi, les combinaisons de médicaments présentant une efficacité sélective dans des échantillons '+
	  'de patients individuels ou dans des sous-groupes d\'échantillons seront traduites en de potentielles options de traitement. Le pipeline complet'+
	  'proposé pour la prédiction, la modélisation, et l’effectuation de tests de combinaisons de médicaments pourrait alors déboucher sur de nouveaux'+ 
	  'traitements plus efficaces et plus sûrs par rapport aux monothérapies cytotoxiques actuelles.',
	  
	  
	fa:'به منظور تسهیل یک طراحی منطقی از ترکیب چند دارو در راستای پزشکی فردی شده سرطان، ما '+
'یک روش خوشه بندی برای تعیین زیرگروه های بیماران بر مبنای درمان اختصاصی (داروی درست'+
 'برای بیمار مشخص) توسعه دادیم. در این پژوهش، یک رویکرد مدلسازی شبکه ای برای مقاومت'+
 'بیماران به شیمی درمانی توسعه داده شده است که بهترین ترکیب چند دارویی را پیش بینی می کند.'+
 'پیش بینی ترکیب چند دارویی برای هر بیمار به صورت جداگانه انجام گرفته و به کمک پلتفرم آزمون '+
'دارو روی نمونه های بیماران پیش از درمانگاه، ارزیابی می گردد. '+

'سپس داده های به دست آمده به منظور تعیین هم¬افزایی قابل توجه در دوزهای درمانی مربوطه مورد '+
'بررسی قرار گرفته و به منظور تفسیر مکانیسم عمل، ترکیب چند دارویی موردنظر در شبکه پیام'+
 'رسانی سرطان مدلسازی می شود. ترکیب های با بالاترین کارآمدی در هر نمونه بیمار یا زیرگروهی '+
'از بیماران برای استفاده در گزینه های درمانی اضافه می گردند. این فرایند پیش بینی، مدلسازی و '+
'آزمون ترکیب چند دارویی با توجه به مشکلات روش های درمانی رایج تک دارویی و دارای سمیت'+
' سلولی، می تواند منجر به روش درمانی جدید، ایمن تر و با کارایی بیشتر بگردد. ',

	

	it:'Per muoverci verso un futuro di medicina oncologica veramente personalizzata é innanzitutto necessario facilitare la progettazione '+
	'razionale di combinazioni di farmaci. Con questo obiettivo, svilupperemo metodi di clustering per l\'identificazione di sottogruppi '+
	'omogenei di pazienti che richiedono trattamenti specifici ("il farmaco giusto per il paziente giusto"). Per i pazienti resistenti alla '+
	'chemioterapia, svilupperemo modelli basati su reti per predire la combinazione di farmaci con la più alta probabilità di successo.'+
	'La previsione della migliore combinazione di farmaci verrà effettuata per ciascun paziente e verrà convalidata utilizzando una piattaforma'+
	'di test pre-clinica su campioni cellulari del paziente stesso. Esploreremo i dati ottenuti dallo screening delle combinazioni di farmaci '+
	'per identificare eventuali sinergie significative a dosi terapeuticamente rilevanti. I risultati saranno modellati in reti di segnalazione '+
	'cellulare del cancro per capire i meccanismi di azione. Le combinazioni di farmaci efficaci per singoli pazienti o gruppi di pazienti '+
	'saranno infine tradotte in opzioni di trattamento. Gli approcci di previsione, modellizzazione e sperimentazione proposti hanno '+
	'il potenziale di condurci a trattamenti nuovi, più efficaci e più sicuri rispetto alle attuali monoterapie citotossiche.'
	
	  
  },
  
  {
	  en:'References',
	fa:'منابع'  ,
	  it:'Riferimenti bibliografici',
	  fr:'Références'
	  
  }
  
  
  
  
];






