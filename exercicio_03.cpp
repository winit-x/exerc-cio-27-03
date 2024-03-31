#include <iostream>
#include <limits> // Adicione esta linha para usar numeric_limits
using namespace std;

int main() {
    const int num_values = 10;
    double total_sum = 0;
    double min_value = numeric_limits<double>::max();
    double max_value = numeric_limits<double>::min();
    int count = 0;

    cout << "Digite valores (Ctrl+D para encerrar a entrada):" << endl;

    while (count < num_values) {
        double value;
        cin >> value;

        if (value > 200) {
            count++;
            total_sum += value;
            min_value = min(min_value, value);
            max_value = max(max_value, value);
        }
    }

    double average = total_sum / num_values;

    cout << "Média dos 10 valores: " << average << endl;
    cout << "Soma dos valores: " << total_sum << endl;
    cout << "Maior valor aceito: " << max_value << endl;
    cout << "Menor valor aceito: " << min_value << endl;

    return 0;
}
