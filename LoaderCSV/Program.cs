using LoaderCSV.Classes;

Console.WriteLine("Loader CSV App начала работу!");
//----------------------------- SqlServer ---------------------------
Loader loader = new Loader("appsettings.json", "SqlServer");
string? Import = "n";
string? FilePath = null;
Console.WriteLine("Хотите импортировать файл? (y / n)");
Import = Console.ReadLine();
if (Import == "y")
{
    Console.WriteLine("Введите путь к файлу .csv");
    FilePath = Console.ReadLine();
    if (FilePath != null)
    {
        int? CountInserted = await loader.LoadCSVAsync(FilePath, 2, ";", "\n");
        if (CountInserted.HasValue)
            if (CountInserted.Value == -1)
                Console.WriteLine($"Ошибка добавлеия записей: {CountInserted}");
            else
                Console.WriteLine($"Добавлено запией: {CountInserted}");
    }
    else
    {
        Console.WriteLine("Неверный путь к файлу");
    }
    
}

Console.WriteLine("Loader CSV App завершила работу.");
Console.Read();