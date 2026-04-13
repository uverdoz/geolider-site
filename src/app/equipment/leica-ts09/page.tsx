"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <main className="bg-white text-black px-6 py-14">

            <div className="max-w-3xl mx-auto">

                {/* НАЗАД */}
                <button
                    onClick={() => router.push("/")}
                    className="mb-8 text-sm text-gray-400 hover:text-black transition flex items-center gap-2"
                >
                    ← Назад
                </button>

                {/* HERO */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-14">

                    <img
                        src="/images/leica-ts09.jpg"
                        className="w-full max-w-[320px] mx-auto object-contain"
                    />

                    <div>
                        <h1 className="text-3xl font-semibold mb-3">
                            Leica TS09
                        </h1>

                        <p className="text-gray-600 mb-3 leading-relaxed">
                            Профессиональный тахеометр для задач,
                            где точность измерений напрямую влияет на результат проекта.
                        </p>

                        <p className="text-gray-400 text-sm">
                            1″ • до 1000 м • FlexField • Bluetooth • USB
                        </p>
                    </div>

                </div>

                {/* СТЕКЛЯННЫЙ БЛОК */}
                <div
                    className="relative mb-12 p-6 rounded-2xl 
                    bg-white/70 backdrop-blur-xl 
                    border border-gray-200/50 
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
                    overflow-hidden"
                >

                    {/* ПЛАВНЫЙ ФОН (без motion) */}
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-200 via-transparent to-green-100 animate-pulse" />

                    <div className="relative space-y-3 text-gray-700 leading-relaxed">

                        <p>
                            Leica TS09 разработан для сложных и ограниченных по времени проектов,
                            где требуется высокая точность и максимальная производительность.
                        </p>

                        <p>
                            Благодаря дальномеру до 1000 метров и технологии узкого лазерного луча,
                            прибор позволяет уверенно измерять даже труднодоступные объекты —
                            углы, кромки и поверхности с низким отражением.
                        </p>

                        <p>
                            Интегрированное ПО FlexField обеспечивает быструю работу с данными
                            и удобную навигацию прямо в полевых условиях.
                        </p>

                    </div>
                </div>

                {/* ПРЕИМУЩЕСТВА */}
                <div className="mb-12 space-y-5">
                    <div>
                        <p className="text-sm text-gray-400 mb-2">
                            Преимущества
                        </p>

                        <div className="text-gray-600 space-y-2 text-sm leading-relaxed">
                            <p>• Цветной сенсорный дисплей с высокой яркостью</p>
                            <p>• ПО FlexField Plus с прикладными задачами</p>
                            <p>• Высокая точность (до 1.5 мм на отражатель)</p>
                            <p>• Безотражательные измерения до 1000 м</p>
                            <p>• Bluetooth и USB для передачи данных</p>
                            <p>• Защита от кражи mySecurity</p>
                        </div>
                    </div>
                </div>

                {/* ПРИМЕНЕНИЕ */}
                <div className="mb-12">
                    <p className="text-sm text-gray-400 mb-1">
                        Применение
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Разбивка • Топография • Контроль строительства • Инженерные работы
                    </p>
                </div>

                {/* АКЦЕНТ */}
                <p className="text-lg font-medium mb-12 text-center">
                    Максимальная точность и контроль — стандарт Leica.
                </p>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://wa.me/87767390868"
                        className="bg-[#00C97B] text-white px-7 py-3 rounded-lg text-sm font-medium shadow hover:scale-105 transition"
                    >
                        Получить консультацию
                    </a>
                </div>

            </div>

        </main>
    );
}