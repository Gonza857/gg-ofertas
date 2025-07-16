import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import {Button} from "@/components/ui/button";

const ExportarExcel = ({ datos }) => {
    const exportar = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Productos');

        // Encabezados
        worksheet.columns = [
            { header: 'Nombre', key: 'nombre', width: 30 },
            { header: 'Precio', key: 'precio', width: 15 },
        ];

        // Agregar filas
        datos.forEach(producto => {
            worksheet.addRow({
                nombre: producto.nombre,
                precio: producto.precio,
            });
        });

        const buffer = await workbook.xlsx.writeBuffer();

        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        saveAs(blob, 'productos.xlsx');
    };

    return <Button
        className={"w-full mt-4"}
        onClick={() => exportar()}>
        Exportar a Excel
    </Button>;
};

export default ExportarExcel;
