<?php 
  $ch = curl_init();
  $auth = "832124158:AAEbvNYq9jRfJmLvQAaV4XOx2H3IQOM-ZNA";
  $param = array(
    //"chat_id" => '454135208',
    "chat_id" => '-364053738',
    "text" => 'Обращение гражданина: Иван Александрович '. PHP_EOL .' adsfasdf',
    "reply_markup" => array(
      "inline_keyboard" => array(
        array(
          array(
            "text" => "Ответить",
            "url" => "mailto:vash_dn@mail.ru?subject=Re:Обращение"
          )
        )
      )
    )
  );
  //$url = "https://api.telegram.org/bot{$auth}/sendMessage?chat_id=454135208&text=". http_build_query($param);
  $url = "https://api.telegram.org/bot{$auth}/sendMessage";
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt ( $ch ,CURLOPT_HTTPHEADER, array ( 'Content-Type: application/json' ) );
  //curl_setopt($ch, CURLOPT_PROXY, "socks5://145.239.81.69:1080");
  //curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($param));
  echo "<pre>";
  print_r(json_encode($param));
  echo "</pre>";
  //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  //3850309
  $result = curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  try {
    throw new Exception( isset ( $code ) ? $code : 'Не изветная ошибка: ' , $code);
  } catch (Exception $e) {
    die ( 'Ошибка: ' . $e -> getMessage ( ) .PHP_EOL. 'Код ошибки: ' . $e -> getCode ( ) );
  }
  //file_get_contents("https://api.telegram.org/bot$auth/sendMessage?" . http_build_query($param) );
?>