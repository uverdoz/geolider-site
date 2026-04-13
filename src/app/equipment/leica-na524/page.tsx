"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="bg-white text-black px-6 py-16">

            <div className="max-w-4xl mx-auto">

                {/* НАЗАД */}
                <button
                    onClick={() => router.back()}
                    className="mb-10 text-sm text-gray-400 hover:text-black transition flex items-center gap-2"
                >
                    ← Назад
                </button>

                {/* HERO */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

                    {/* КАРТИНКА */}
                    <motion.img
                        src="/images/leica-na524.jpg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="w-full max-w-[360px] mx-auto object-contain"
                    />

                    {/* ТЕКСТ */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                            Leica NA524
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Классический нивелир для точных высотных измерений.
                            Простое и надежное решение для ежедневных задач на строительной площадке.
                        </p>

                        <p className="text-gray-400 text-sm">
                            Высокая точность • Простота • Надежность
                        </p>
                    </motion.div>

                </div>

                {/* ГЛАВНЫЙ БЛОК С ФОНОМ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative mb-14 p-6 md:p-8 rounded-2xl 
          bg-white/60 backdrop-blur-xl 
          border border-gray-200/50 
          shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
          overflow-hidden"
                >

                    {/* АНИМАЦИЯ ФОНА */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 20%, #00C97B20, transparent 40%)",
                                "radial-gradient(circle at 80% 80%, #00C97B20, transparent 40%)",
                                "radial-gradient(circle at 20% 20%, #00C97B20, transparent 40%)",
                            ],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* ТЕКСТ */}
                    <div className="relative space-y-4 text-gray-700 leading-relaxed">

                        <p>
                            Leica NA524 используется для точного определения высот,
                            нивелирования и контроля уровней на строительных объектах.
                        </p>

                        <p>
                            Благодаря простой конструкции прибор быстро осваивается и подходит
                            как для частных специалистов, так и для профессиональных бригад.
                        </p>

                        <p>
                            Надежная механика и защищенный корпус позволяют работать
                            в сложных погодных условиях без потери точности.
                        </p>

                    </div>
                </motion.div>

                {/* ПРИМЕНЕНИЕ + ФИЧИ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14 space-y-6"
                >

                    <div>
                        <p className="text-sm text-gray-400 mb-2">
                            Применение
                        </p>

                        <p className="text-gray-600">
                            Нивелирование • Высоты • Контроль уровней • Геодезические работы
                        </p>
                    </div>

                    <div className="text-gray-600 leading-relaxed space-y-2">
                        <p>• Плавная и точная система наведения</p>
                        <p>• Просветленная оптика для четкого изображения</p>
                        <p>• Пыле- и влагозащита (IP56)</p>
                        <p>• Устойчивость к вибрациям</p>
                        <p>• Быстрая подготовка к работе</p>
                    </div>

                </motion.div>

                {/* ФИНАЛ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xl md:text-2xl font-medium leading-snug text-center">
                        Простота, точность и надежность — основа работы Leica NA524.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <a
                        href="https://wa.me/87767390868"
                        className="bg-[#00C97B] text-white px-7 py-3 rounded-lg text-sm font-medium shadow hover:scale-105 transition"
                    >
                        Получить консультацию
                    </a>
                </motion.div>

            </div>

        </main>
    );
}