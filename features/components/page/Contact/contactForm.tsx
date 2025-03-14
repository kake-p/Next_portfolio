import { useState } from 'react';
import { useForm } from 'react-hook-form';

const From = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    reset();
  };
  
  return (
    <main className="flex-1 flex justify-center items-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">お問い合わせ</h2>

        {isSubmitted ? (
          <p className="text-green-600 text-center">送信が完了しました！</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">お名前</label>
              <input
                type="text"
                {...register("name", { required: "お名前は必須です" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">メールアドレス</label>
              <input
                type="email"
                {...register("email", {
                  required: "メールアドレスは必須です",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "正しいメールアドレスを入力してください",
                  },
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">お問い合わせ内容</label>
              <textarea
                {...register("message", { required: "お問い合わせ内容を入力してください" })}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{String(errors.message.message)}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                送信
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}

export default From;