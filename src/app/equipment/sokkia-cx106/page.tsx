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
                        src="/images/sokkia-cx106.jpg"
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
                    >
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                            Sokkia CX-106
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Современный электронный тахеометр, разработанный для точных измерений
                            и стабильной работы на строительных и геодезических объектах.
                        </p>

                        <p className="text-gray-400 text-sm">
                            Точность 2″ • REDtech до 500 м • IP66
                        </p>
                    </motion.div>

                </div>

                {/* ОСНОВНОЙ БЛОК */}
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
                            Sokkia CX-106 оснащен дальномером REDtech,
                            который позволяет выполнять измерения без отражателя
                            на расстоянии до 500 метров с высокой точностью.
                        </p>

                        <p>
                            Прибор уверенно работает даже по сложным целям —
                            темные поверхности, углы зданий, провода и объекты,
                            частично перекрытые растительностью или препятствиями.
                        </p>

                        <p>
                            Управление реализовано максимально удобно:
                            быстрые клавиши позволяют запускать измерения,
                            не отрываясь от окуляра, сохраняя контроль над точкой наведения.
                        </p>

                    </div>
                </motion.div>

                {/* ФИЧИ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14 space-y-6"
                >

                    <div>
                        <p className="text-sm text-gray-400 mb-2">
                            Преимущества
                        </p>

                        <div className="text-gray-600 space-y-2 leading-relaxed">
                            <p>• Измерения без отражателя до 500 м</p>
                            <p>• Высокая точность и скорость работы</p>
                            <p>• Удобное управление без отвлечения от визирования</p>
                            <p>• Работа по сложным и труднодоступным целям</p>
                        </div>
                    </div>

                    <div className="text-gray-600 space-y-2 leading-relaxed">
                        <p>• Защита IP66 — пыль и дождь</p>
                        <p>• USB и передача данных</p>
                        <p>• Поддержка DXF / TXT / SDR</p>
                        <p>• Совместимость с Credo и другим ПО</p>
                    </div>

                </motion.div>

                {/* ПРИМЕНЕНИЕ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-sm text-gray-400 mb-2">
                        Применение
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Строительство • Разбивка осей • Топография • Контроль объектов • Инженерные работы
                    </p>
                </motion.div>

                {/* АКЦЕНТ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xl md:text-2xl font-medium leading-snug text-center">
                        Универсальность, точность и надежность —
                        основа работы Sokkia CX.
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