import { Header } from "@/components/Header";

export function MainLayout(props: React.PropsWithChildren) {
  const { children } = props as { children: React.ReactNode };
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full min-h-[calc(100vh-70px)] px-4 py-8 bg-gray-100 text-gray-800">
        {children}
      </main>
    </>
  );
}
