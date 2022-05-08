const quizData = [
    {
      question: '“Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?',
      a: 'Reşat Nuri Güntekin',
      b: 'Halide Edip Adıvar  ',
      c: 'Ziya Gökalp',
      d: 'Ömer Seyfettin',
      correct: 'b',
    },
    {
      question: 'Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir??',
      a: 'Hititler',
      b: 'Elamlar',
      c: 'Sümerler',
      d: 'Urartular',
      correct: 'c',
    },
    {
      question: 'Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir?',
      a: 'Endonezya',
      b: 'Srilanka',
      c: 'Tayland',
      d: 'Hindistan',
      correct: 'a',
    },
    {
      question: '2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?',
      a: 'Grup Athena ',
      b: 'Sertap Erener ',
      c: 'Şebnem Paker',
      d: 'Ajda Pekkan',
      correct: 'b',
    },
    {
      question: 'Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?',
      a: 'Bursa',
      b: 'Ankara',
      c: 'İstanbul ',
      d: 'Gaziantep',
      correct: 'd',
    },
    {
      question: 'Romen Rakamında Hangi Sayı Yoktur?',
      a: '0',
      b: '50',
      c: '100 ',
      d: '1000',
      correct: 'a',
    },
    {
      question: 'Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?',
      a: 'Mekke',
      b: 'Kudüs',
      c: 'Roma',
      d: 'İstanbul',
      correct: 'b',
    },
    {
      question: ' Aspirinin Hammaddesi Nedir?',
      a: 'Söğüt ',
      b: 'Köknar',
      c: 'Kavak  ',
      d: 'Meşe',
      correct: 'a',
    },
    {
      question: 'Bir Gün Kaç Saniyedir?',
      a: '86000',
      b: '88600',
      c: '86400',
      d: '84800',
      correct: 'c',
    },
      
];

const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const d= document.getElementById('d+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

let index = 0;
let score = 0;

function getSelected() {
  let ans = undefined;
  all_answer.forEach((element) => {
    if (element.checked) {
      ans = element.id;
    }
  });
  return ans;
}

function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}

function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
  d.innerText = quizData[index].d;
}

function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      alert('score : 9 soruda ' + score +' doğru cevap verdiniz.');
      location.reload();
    }
  });
}
getquiz();
startquiz();