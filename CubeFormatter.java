import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.File;
import java.awt.Graphics2D;
import java.io.FileOutputStream;
import java.util.ArrayList;

public class CubeFormatter
{
	public static void main(String[] args)
	{
		try
		{
			File directory = new File("images");
			ArrayList<File> allImages = new ArrayList<File>();
			File fileList[] = directory.listFiles();
			for(int k = 0; k < fileList.length; ++k)
				if(fileList[k].isDirectory())
					for(int j = 0; j < fileList[k].listFiles().length; ++j)
						allImages.add(fileList[k].listFiles()[j]);
				else
					allImages.add(fileList[k]);
			System.out.println(allImages.size());
			//BufferedImage card = ImageIO.read(new File());
			//FileOutputStream page = new FileOutputStream();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}