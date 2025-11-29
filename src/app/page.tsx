"use client";

import { useState } from "react";
import { Home, Dumbbell, UtensilsCrossed, TrendingUp, MessageCircle, User, Menu, X, Sparkles, Target, Award, Heart, Zap, ChevronRight } from "lucide-react";

type Screen = "home" | "quiz" | "workouts" | "diet" | "progress" | "chat" | "profile";

export default function WeFitness() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizData, setQuizData] = useState({
    age: "",
    weight: "",
    height: "",
    goal: "",
    level: "",
    restrictions: [] as string[],
  });

  const calculateIMC = () => {
    if (quizData.weight && quizData.height) {
      const weight = parseFloat(quizData.weight);
      const height = parseFloat(quizData.height) / 100;
      return (weight / (height * height)).toFixed(1);
    }
    return null;
  };

  const menuItems = [
    { id: "home" as Screen, icon: Home, label: "Início" },
    { id: "workouts" as Screen, icon: Dumbbell, label: "Treinos" },
    { id: "diet" as Screen, icon: UtensilsCrossed, label: "Dieta" },
    { id: "progress" as Screen, icon: TrendingUp, label: "Progresso" },
    { id: "chat" as Screen, icon: MessageCircle, label: "Suporte" },
    { id: "profile" as Screen, icon: User, label: "Perfil" },
  ];

  const quizQuestions = [
    {
      question: "Qual é a sua idade?",
      field: "age",
      type: "number",
      placeholder: "Ex: 25",
      tip: "A idade ajuda a personalizar a intensidade dos treinos"
    },
    {
      question: "Qual é o seu peso atual?",
      field: "weight",
      type: "number",
      placeholder: "Ex: 70 kg",
      tip: "Vamos calcular seu IMC em tempo real!"
    },
    {
      question: "Qual é a sua altura?",
      field: "height",
      type: "number",
      placeholder: "Ex: 175 cm",
      tip: "Com peso e altura, calculamos seu perfil ideal"
    },
    {
      question: "Qual é o seu objetivo?",
      field: "goal",
      type: "select",
      options: ["Perder peso", "Ganhar massa", "Definir músculos", "Manter forma"],
      tip: "Seu objetivo define todo o plano personalizado"
    },
    {
      question: "Qual é o seu nível de experiência?",
      field: "level",
      type: "select",
      options: ["Iniciante", "Intermediário", "Avançado"],
      tip: "Vamos ajustar a dificuldade dos exercícios"
    },
  ];

  const workouts = [
    {
      title: "Treino HIIT Iniciante",
      duration: "20 min",
      calories: "250 kcal",
      level: "Iniciante",
      type: "Cardio",
      gradient: "from-orange-400 to-pink-600"
    },
    {
      title: "Força e Hipertrofia",
      duration: "45 min",
      calories: "400 kcal",
      level: "Intermediário",
      type: "Musculação",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Yoga & Flexibilidade",
      duration: "30 min",
      calories: "150 kcal",
      level: "Todos",
      type: "Alongamento",
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      title: "Desafio 30 Dias",
      duration: "Variável",
      calories: "300+ kcal",
      level: "Todos",
      type: "Desafio",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const dietPlans = [
    {
      title: "Dieta Low Carb",
      calories: "1800 kcal/dia",
      meals: "5 refeições",
      type: "Emagrecimento",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Dieta Hiperproteica",
      calories: "2500 kcal/dia",
      meals: "6 refeições",
      type: "Ganho de Massa",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Dieta Vegetariana",
      calories: "2000 kcal/dia",
      meals: "5 refeições",
      type: "Equilibrada",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Dieta Mediterrânea",
      calories: "2200 kcal/dia",
      meals: "5 refeições",
      type: "Saúde Geral",
      gradient: "from-amber-400 to-orange-600"
    },
  ];

  const renderHome = () => (
    <div className="space-y-8 pb-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold">Bem-vindo de volta!</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Pronto para treinar?</h1>
          <p className="text-white/90 mb-6">Seu treino de hoje está esperando por você</p>
          <button 
            onClick={() => setCurrentScreen("quiz")}
            className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Começar Avaliação
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
          <Target className="w-8 h-8 mb-2" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-white/80">Treinos este mês</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 text-white">
          <Zap className="w-8 h-8 mb-2" />
          <p className="text-2xl font-bold">3.2k</p>
          <p className="text-sm text-white/80">Calorias queimadas</p>
        </div>
      </div>

      {/* Recomendações Personalizadas */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recomendado para você</h2>
          <Sparkles className="w-5 h-5 text-purple-600" />
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Treino HIIT Matinal</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Perfeito para começar o dia com energia</p>
              </div>
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>⏱️ 20 min</span>
              <span>🔥 250 kcal</span>
              <span>💪 Iniciante</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dieta Balanceada</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Plano nutricional personalizado</p>
              </div>
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>🍽️ 5 refeições</span>
              <span>📊 2000 kcal</span>
              <span>✅ Vegetariano</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desafios Ativos */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Desafios Ativos</h2>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Desafio 30 Dias</h3>
              <p className="text-sm text-white/80">15 dias concluídos</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">50%</p>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div className="bg-white rounded-full h-3 w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const currentQuestion = quizQuestions[quizStep];
    const imc = calculateIMC();
    const progress = ((quizStep + 1) / quizQuestions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto pb-24">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Pergunta {quizStep + 1} de {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold text-purple-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === "number" && (
            <div className="space-y-4">
              <input
                type="number"
                value={quizData[currentQuestion.field as keyof typeof quizData] as string}
                onChange={(e) => setQuizData({ ...quizData, [currentQuestion.field]: e.target.value })}
                placeholder={currentQuestion.placeholder}
                className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 transition-all"
              />
              
              {/* IMC Preview */}
              {imc && currentQuestion.field === "height" && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white animate-fade-in">
                  <p className="text-sm mb-1">Seu IMC atual</p>
                  <p className="text-4xl font-bold">{imc}</p>
                  <p className="text-sm mt-2 text-white/80">
                    {parseFloat(imc) < 18.5 ? "Abaixo do peso" : 
                     parseFloat(imc) < 25 ? "Peso normal" : 
                     parseFloat(imc) < 30 ? "Sobrepeso" : "Obesidade"}
                  </p>
                </div>
              )}
            </div>
          )}

          {currentQuestion.type === "select" && (
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => setQuizData({ ...quizData, [currentQuestion.field]: option })}
                  className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                    quizData[currentQuestion.field as keyof typeof quizData] === option
                      ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 scale-105"
                      : "border-gray-200 dark:border-gray-600 hover:border-purple-400 hover:scale-102"
                  }`}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{option}</span>
                </button>
              ))}
            </div>
          )}

          {/* Tip */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              💡 {currentQuestion.tip}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {quizStep > 0 && (
            <button
              onClick={() => setQuizStep(quizStep - 1)}
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Voltar
            </button>
          )}
          <button
            onClick={() => {
              if (quizStep < quizQuestions.length - 1) {
                setQuizStep(quizStep + 1);
              } else {
                setCurrentScreen("home");
                setQuizStep(0);
              }
            }}
            className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            {quizStep < quizQuestions.length - 1 ? "Próxima" : "Finalizar"}
          </button>
        </div>
      </div>
    );
  };

  const renderWorkouts = () => (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Treinos</h1>
        <p className="text-gray-600 dark:text-gray-400">Escolha seu treino e comece agora</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${workout.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full mb-3">
                    {workout.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{workout.title}</h3>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  ⏱️ {workout.duration}
                </span>
                <span className="flex items-center gap-1">
                  🔥 {workout.calories}
                </span>
                <span className="flex items-center gap-1">
                  💪 {workout.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desafios Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Desafios Mensais</h2>
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Desafio Verão 2024</h3>
          </div>
          <p className="text-white/90 mb-6">Complete 20 treinos este mês e ganhe uma medalha exclusiva!</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white/20 rounded-full h-4">
              <div className="bg-white rounded-full h-4 w-3/5"></div>
            </div>
            <span className="font-bold">12/20</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiet = () => (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Planos de Dieta</h1>
        <p className="text-gray-600 dark:text-gray-400">Nutrição personalizada para seus objetivos</p>
      </div>

      {/* Filtros de Preferências */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Preferências Alimentares</h3>
        <div className="flex flex-wrap gap-2">
          {["Vegetariano", "Vegano", "Sem Glúten", "Sem Lactose", "Low Carb"].map((pref) => (
            <button
              key={pref}
              className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-purple-600 hover:text-purple-600 transition-all"
            >
              {pref}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dietPlans.map((plan, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full mb-3">
                    {plan.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h3>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  📊 {plan.calories}
                </span>
                <span className="flex items-center gap-1">
                  🍽️ {plan.meals}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Receitas Rápidas */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Receitas Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Smoothie Proteico</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Perfeito pós-treino</p>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
              <span>⏱️ 5 min</span>
              <span>🔥 180 kcal</span>
              <span>💪 25g proteína</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Salada Completa</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Almoço balanceado</p>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
              <span>⏱️ 10 min</span>
              <span>🔥 350 kcal</span>
              <span>🥗 Vegetariano</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Seu Progresso</h1>
        <p className="text-gray-600 dark:text-gray-400">Acompanhe sua evolução</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
          <p className="text-sm mb-2">Peso Atual</p>
          <p className="text-3xl font-bold">72kg</p>
          <p className="text-xs text-white/80 mt-1">-3kg este mês</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <p className="text-sm mb-2">IMC</p>
          <p className="text-3xl font-bold">23.5</p>
          <p className="text-xs text-white/80 mt-1">Normal</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
          <p className="text-sm mb-2">Treinos</p>
          <p className="text-3xl font-bold">45</p>
          <p className="text-xs text-white/80 mt-1">Total este mês</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
          <p className="text-sm mb-2">Calorias</p>
          <p className="text-3xl font-bold">12.5k</p>
          <p className="text-xs text-white/80 mt-1">Queimadas</p>
        </div>
      </div>

      {/* Gráfico de Evolução */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Evolução de Peso</h2>
        <div className="space-y-4">
          {[
            { month: "Jan", weight: 75, color: "bg-blue-500" },
            { month: "Fev", weight: 74, color: "bg-purple-500" },
            { month: "Mar", weight: 73, color: "bg-pink-500" },
            { month: "Abr", weight: 72, color: "bg-orange-500" },
          ].map((data, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 w-12">{data.month}</span>
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-8 relative overflow-hidden">
                <div 
                  className={`${data.color} h-8 rounded-full flex items-center justify-end pr-4 text-white text-sm font-bold transition-all duration-1000`}
                  style={{ width: `${(data.weight / 75) * 100}%` }}
                >
                  {data.weight}kg
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registro de Saúde */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Registro de Saúde</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-300 mb-1">Pressão Arterial</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">120/80</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Normal</p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-1">Freq. Cardíaca</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">72 bpm</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Repouso</p>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Conquistas Desbloqueadas</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🏆", label: "Primeira Semana" },
            { icon: "🔥", label: "10 Treinos" },
            { icon: "💪", label: "Meta Atingida" },
          ].map((achievement, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className="text-xs font-semibold">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Suporte</h1>
        <p className="text-gray-600 dark:text-gray-400">Estamos aqui para ajudar</p>
      </div>

      {/* FAQ Dinâmico */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Perguntas Frequentes</h2>
        {[
          { q: "Como alterar meu plano de treino?", a: "Acesse Perfil > Configurações > Plano de Treino" },
          { q: "Posso pausar minha assinatura?", a: "Sim, em Perfil > Assinatura > Pausar" },
          { q: "Como registrar meu progresso?", a: "Vá em Progresso e clique em 'Adicionar Registro'" },
        ].map((faq, index) => (
          <details key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 group">
            <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
              {faq.q}
              <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
          </details>
        ))}
      </div>

      {/* Chat Box */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
          <h3 className="font-bold text-lg">Chat ao Vivo</h3>
          <p className="text-sm text-white/80">Resposta em até 5 minutos</p>
        </div>
        <div className="p-6 space-y-4 h-96 overflow-y-auto">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-2xl p-4">
              <p className="text-sm text-gray-900 dark:text-white">Olá! Como posso ajudar você hoje?</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Perfil</h1>
        <p className="text-gray-600 dark:text-gray-400">Gerencie sua conta</p>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">João da Silva</h2>
            <p className="text-white/80 mb-3">joao@email.com</p>
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Plano Premium
            </span>
          </div>
        </div>
      </div>

      {/* Dashboard Resumido */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Checklist Diário</h3>
        <div className="space-y-3">
          {[
            { task: "Treino matinal", done: true },
            { task: "Café da manhã saudável", done: true },
            { task: "Beber 2L de água", done: false },
            { task: "Treino da tarde", done: false },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                item.done ? "bg-green-500 border-green-500" : "border-gray-300 dark:border-gray-600"
              }`}>
                {item.done && <span className="text-white text-sm">✓</span>}
              </div>
              <span className={`flex-1 ${item.done ? "line-through text-gray-400" : "text-gray-900 dark:text-white"}`}>
                {item.task}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Configurações */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-900 dark:text-white">Configurações</h3>
        {[
          { icon: User, label: "Editar Perfil" },
          { icon: Target, label: "Meus Objetivos" },
          { icon: Award, label: "Conquistas" },
          { icon: Heart, label: "Saúde e Bem-estar" },
        ].map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-102 transition-transform"
          >
            <div className="flex items-center gap-4">
              <item.icon className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Plano Premium */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
        <p className="text-white/90 mb-6">Acesso ilimitado a todos os recursos</p>
        <div className="space-y-2 mb-6">
          <p className="flex items-center gap-2 text-sm">✓ Treinos personalizados ilimitados</p>
          <p className="flex items-center gap-2 text-sm">✓ Planos de dieta customizados</p>
          <p className="flex items-center gap-2 text-sm">✓ Suporte prioritário 24/7</p>
          <p className="flex items-center gap-2 text-sm">✓ Relatórios avançados de progresso</p>
        </div>
        <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
          Gerenciar Assinatura
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WeFitness
              </h1>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Flutuante */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setMenuOpen(false)}>
          <div 
            className="absolute right-4 top-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 w-64 animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentScreen(item.id);
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  currentScreen === item.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentScreen === "home" && renderHome()}
        {currentScreen === "quiz" && renderQuiz()}
        {currentScreen === "workouts" && renderWorkouts()}
        {currentScreen === "diet" && renderDiet()}
        {currentScreen === "progress" && renderProgress()}
        {currentScreen === "chat" && renderChat()}
        {currentScreen === "profile" && renderProfile()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {menuItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                  currentScreen === item.id
                    ? "text-purple-600 scale-110"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
