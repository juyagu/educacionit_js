<?php
$pais = $_GET['pais'];
?>
<select name="listadoProvincias">
<?php switch($pais){
	case "ARG":
    	echo '<option value="Buenos Aires">Buenos Aires</option>';
    	echo '<option value="Santa Fe">Santa Fe</option>';
        break;
    case "BRA":
        echo '<option value="Brasilia">Brasilia</option>';
        echo '<option value="Rio de Janeiro">Rio de Janeiro</option>';
        break;
    case "URU":
        echo '<option value="Montevideo">Montevideo</option>';
        echo '<option value="Concepcion del Uruguay">Concepcion del Uruguay</option>';
        break;
    } ?>
</select>
