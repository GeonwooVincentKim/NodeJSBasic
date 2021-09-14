using System;
using System.Threading;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < Environment.ProcessorCount; i++)
            {
                Thread t1 = new Thread(threadFunc);
                t1.IsBackground = true;
                t1.Start();
            }

            Console.WriteLine("Press ENTER key to exit...");
            Console.ReadLine();
        }

        private static void threadFunc()
        {
            while (true)
            {
            }
        }
    }
}